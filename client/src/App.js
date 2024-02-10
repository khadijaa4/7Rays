import "./App.css";
import { useApi } from "./hooks/use-api";
import PatientsPage from "./PatientsPage"; 

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>{response}</p>
      </header>
      <PatientsPage /> 
    </div>
  );
}

export default App;
