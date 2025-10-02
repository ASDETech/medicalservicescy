# Deployment Guide

## Environment Variables

Configure these environment variables in your deployment platform:

### Required Variables

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Optional - Google Calendar Integration

To enable Google Calendar integration for bookings:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Create a Service Account:
   - Go to IAM & Admin > Service Accounts
   - Create Service Account
   - Download the JSON key file
5. Share your Google Calendar with the service account email
6. Add these environment variables:

```
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
```

**Important**: The `GOOGLE_PRIVATE_KEY` should include the newline characters as `\n`. The function will automatically replace them with actual newlines.

## Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard
4. The `/api/book` endpoint will be automatically available

## Netlify Deployment

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. Add environment variables in Netlify dashboard
4. The `/.netlify/functions/book` endpoint will be automatically available
5. Update the frontend fetch URL to: `/.netlify/functions/book`

## Database Setup

Run the migration to create the bookings table:

```sql
-- This is automatically handled by Supabase
-- See: supabase/migrations/001_create_bookings_table.sql
```

## Testing the API

```bash
curl -X POST https://your-domain.com/api/book \
  -H "Content-Type: application/json" \
  -d '{
    "service": "homecare",
    "location": "123 Main St, Nicosia",
    "datetime": "2025-10-15T10:00:00Z",
    "name": "John Doe",
    "phone": "+357 99 123456",
    "email": "john@example.com",
    "notes": "Please call before arrival"
  }'
```

Expected response:
```json
{
  "message": "Booking created successfully",
  "booking": {
    "id": "uuid",
    "service": "homecare",
    "location": "123 Main St, Nicosia",
    "datetime": "2025-10-15T10:00:00Z",
    "name": "John Doe",
    "phone": "+357 99 123456",
    "email": "john@example.com",
    "notes": "Please call before arrival",
    "status": "pending",
    "google_calendar_event_id": "event_id_if_configured",
    "created_at": "2025-10-02T12:00:00Z",
    "updated_at": "2025-10-02T12:00:00Z"
  }
}
```
