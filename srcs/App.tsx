import { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;