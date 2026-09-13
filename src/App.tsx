import './App.css';
import { getAllData } from './utils/supabase/supabaseTest';

function App() {
  getAllData();

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;