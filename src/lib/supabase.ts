import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our contact submissions
export interface ContactSubmission {
  id?: string
  type: 'general' | 'newsletter' | 'appointment'
  name: string
  email: string
  company?: string
  phone?: string
  project_type?: string
  message?: string
  preferred_method?: string
  appointment_date?: string
  appointment_time?: string
  created_at?: string
  updated_at?: string
}

// Function to submit contact form data
export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data])

  if (error) {
    console.error('Error submitting form:', error)
    throw error
  }

  return { success: true }
}