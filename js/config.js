// Completá estos 3 datos (los 3 salen del panel de tu proyecto en
// supabase.com → Project Settings → API) y no toques nada más de este
// archivo. Ver README.md, sección "2) Configurá los datos de tu proyecto".
window.SUPABASE_CONFIG = {
  // "Project URL", algo como https://abcdefghijk.supabase.co
  url: "https://hgcidbybeyecikciskqk.supabase.co",

  // "anon public" key (la clave PÚBLICA — NUNCA la "service_role", esa es
  // secreta y no va acá ni en ningún archivo de esta carpeta web/).
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnY2lkYnliZXllY2lrY2lza3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNjYyNDQsImV4cCI6MjEwNTc0MjI0NH0.STRswP-OGF1WAGN4hoJzToivu1womTbCfTbG1Zrf7Ng",

  // URL de la Edge Function "create-student" (la de administración).
  // Se arma sola a partir de tu Project URL: cambiá ".supabase.co" por
  // ".functions.supabase.co/create-student" — Supabase te la muestra
  // también en la pantalla de la función ya publicada.
  createStudentFunctionUrl: "https://hgcidbybeyecikciskqk.functions.supabase.co/create-student",

  // Nombre exacto del archivo del simulador tal cual lo subiste al bucket
  // "simulator-files" en Supabase Storage.
  simulatorFileName: "simulador.html",
};
