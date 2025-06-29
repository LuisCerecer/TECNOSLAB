/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `type` (text) - Type of form submission (general, newsletter, appointment, etc.)
      - `name` (text)
      - `email` (text)
      - `company` (text, optional)
      - `phone` (text, optional)
      - `project_type` (text, optional)
      - `message` (text, optional)
      - `preferred_method` (text, optional) - For appointment requests
      - `appointment_date` (timestamptz, optional)
      - `appointment_time` (text, optional)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (public access for form submissions)
    - Add policy for reading submissions (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('general', 'newsletter', 'appointment')),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  project_type text,
  message text,
  preferred_method text,
  appointment_date timestamptz,
  appointment_time text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (for public forms)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read submissions (for admin purposes)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();