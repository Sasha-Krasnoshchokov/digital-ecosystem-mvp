import './App.css';
import { getSupabaseClient } from './lib/supabase';

function App() {
  const dbClient = getSupabaseClient();
  console.log({ dbClient });
  return <div>MVP PWA</div>;
}

export default App;
