import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tdhaghbaidxpsbwmdrzq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaGFnaGJhaWR4cHNid21kcnpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzOTAzODYsImV4cCI6MjA0NTk2NjM4Nn0.jeXmKazxUT9PPuRGz0LupPTCKIH-qPP_sbiPGCkV2TQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
