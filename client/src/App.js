import './App.css';
import ExamTable from './ExamTable';
import { useApi } from './hooks/use-api';

function App() {
const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
          <ExamTable/>
        </p>
      </header>
     
    </div>
  );
}

export default App;
