import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
