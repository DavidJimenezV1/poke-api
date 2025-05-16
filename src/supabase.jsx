// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ylbuifqrqmidygphtcfz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYnVpZnFycW1pZHlncGh0Y2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTcxNjEsImV4cCI6MjA2Mjk5MzE2MX0.29fPF3xVP9S_nu1pe-nW-QoSyDqnQnkvnEuvMTb8nnw';
export const supabase = createClient(supabaseUrl, supabaseKey);