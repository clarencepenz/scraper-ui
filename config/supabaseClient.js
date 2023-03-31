import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create the connection to supabase using the Project URL and anon public key
export const supabase = createClient(supabaseUrl, supabaseAnonKey);