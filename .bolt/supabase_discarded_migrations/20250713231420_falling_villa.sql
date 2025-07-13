/*
  # Create TECNOSBALMX table for form submissions

  1. New Tables
    - `TECNOSBALMX`
      - `id` (uuid, primary key)
      - `form_type` (text, 'general' or 'newsletter')
      - `nombre` (text)
      - `empresa` (text)
      - `email` (text)
      - `tipo_proyecto` (text, nullable - only for general forms)
      - `mensaje` (text, nullable - only for general forms)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `TECNOSBALMX` table
    - Add policy for anonymous users to insert data
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS TECNOSBALMX (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL CHECK (form_type IN ('general', 'newsletter')),
  nombre text NOT NULL,
  empresa text NOT NULL,
  email text NOT NULL,
  tipo_proyecto text,
  mensaje text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE TECNOSBALMX ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert form submissions
CREATE POLICY "Anonymous users can submit forms"
  ON TECNOSBALMX
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all submissions
CREATE POLICY "Authenticated users can read submissions"
  ON TECNOSBALMX
  FOR SELECT
  TO authenticated
  USING (true);

-- Create trigger to automatically update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tecnosbalmx_updated_at
    BEFORE UPDATE ON TECNOSBALMX
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();