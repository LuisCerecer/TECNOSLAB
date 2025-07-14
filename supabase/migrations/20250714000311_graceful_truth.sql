/*
  # Create TECNOSLABMX table for form submissions

  1. New Tables
    - `TECNOSLABMX`
      - `id` (uuid, primary key)
      - `form_type` (text) - 'general' or 'newsletter'
      - `nombre` (text, required)
      - `empresa` (text, required)
      - `email` (text, required)
      - `tipo_proyecto` (text, optional)
      - `mensaje` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `TECNOSLABMX` table
    - Add policy for anonymous users to insert data
    - Add policy for authenticated users to read data

  3. Triggers
    - Add trigger to automatically update `updated_at` timestamp
*/

-- Create the TECNOSLABMX table
CREATE TABLE IF NOT EXISTS "TECNOSLABMX" (
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

-- Enable Row Level Security
ALTER TABLE "TECNOSLABMX" ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can insert form submissions"
  ON "TECNOSLABMX"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON "TECNOSLABMX"
  FOR SELECT
  TO authenticated
  USING (true);

-- Create trigger function for updating updated_at
CREATE OR REPLACE FUNCTION update_tecnoslabmx_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER update_tecnoslabmx_updated_at
  BEFORE UPDATE ON "TECNOSLABMX"
  FOR EACH ROW
  EXECUTE FUNCTION update_tecnoslabmx_updated_at();