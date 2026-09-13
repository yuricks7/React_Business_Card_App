import './App.css';
// import { supabase } from './utils/supabase/supabaseClient';
import { getAllData } from './utils/supabase/supabaseTest';

function App() {
  const data = getAllData();

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;