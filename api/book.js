import { createClient } from '@supabase/supabase-js';
import { google } from 'googleapis';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createGoogleCalendarEvent(booking) {
  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      privateKey,
      ['https://www.googleapis.com/auth/calendar']
    );

    const calendar = google.calendar({ version: 'v3', auth });

    const startDateTime = new Date(booking.datetime);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const event = {
      summary: `Booking: ${booking.service} — ${booking.name}`,
      location: booking.location,
      description: `
Service: ${booking.service}
Name: ${booking.name}
Phone: ${booking.phone}
Email: ${booking.email}
${booking.notes ? `\nNotes: ${booking.notes}` : ''}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Athens',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Athens',
      },
      attendees: [
        { email: booking.email }
      ],
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: event,
      sendUpdates: 'all',
    });

    return response.data.id;
  } catch (error) {
    console.error('Google Calendar error:', error);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { service, location, datetime, name, phone, email, notes } = req.body;

    if (!service || !location || !datetime || !name || !phone || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    let googleCalendarEventId = null;
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_CALENDAR_ID) {
      googleCalendarEventId = await createGoogleCalendarEvent({
        service,
        location,
        datetime,
        name,
        phone,
        email,
        notes
      });
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          service,
          location,
          datetime,
          name,
          phone,
          email,
          notes: notes || null,
          google_calendar_event_id: googleCalendarEventId,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ message: 'Failed to create booking' });
    }

    return res.status(200).json({
      message: 'Booking created successfully',
      booking: data
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
