import { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App: FunctionComponent = () => {
	return (
		<Router>
			<div>
				<nav>
					<div className="navBarre">
						<Link to="/" className="Titre">Pokedex</Link>
					</div>
				</nav>
				<Routes>
					<Route path="/" element={<PokemonList />} />
					<Route path="/pokemons" element={<PokemonList />} />
					<Route path="/pokemons/:id" element={<PokemonDetail />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;