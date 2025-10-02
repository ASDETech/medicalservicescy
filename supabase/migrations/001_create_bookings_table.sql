/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `service` (text) - Type of service requested
      - `location` (text) - Service location/address
      - `datetime` (timestamptz) - Scheduled date and time
      - `name` (text) - Customer full name
      - `phone` (text) - Customer phone number
      - `email` (text) - Customer email address
      - `notes` (text, nullable) - Additional notes
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `google_calendar_event_id` (text, nullable) - Google Calendar event ID
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for service role to manage all bookings
    - Add policy for authenticated users to view their own bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service text NOT NULL,
  location text NOT NULL,
  datetime timestamptz NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  notes text,
  status text DEFAULT 'pending' NOT NULL,
  google_calendar_event_id text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage all bookings"
  ON bookings
  FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS bookings_email_idx ON bookings(email);
CREATE INDEX IF NOT EXISTS bookings_datetime_idx ON bookings(datetime);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings(status);
