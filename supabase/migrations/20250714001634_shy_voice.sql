/*
  # Create TECNOSLABMX submissions table

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
    - Add policy for anonymous users to insert form submissions
    - Add policy for authenticated users to read submissions

  3. Features
    - Auto-updating timestamps
    - Form type validation
</description>

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

-- Policy to allow anonymous users to insert form submissions
CREATE POLICY "Anyone can submit forms"
  ON "TECNOSLABMX"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy to allow authenticated users to read submissions
CREATE POLICY "Authenticated users can read submissions"
  ON "TECNOSLABMX"
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
CREATE TRIGGER update_tecnoslabmx_updated_at
  BEFORE UPDATE ON "TECNOSLABMX"
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();