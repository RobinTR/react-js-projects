import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://skururrmwlzhhjwnmmwl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrdXJ1cnJtd2x6aGhqd25tbXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTQxNjYsImV4cCI6MjA2ODc3MDE2Nn0.xzqNVcL2yAnA7cf_A1VwT5E7NOOzUhJLVlfiTwp6u64";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);