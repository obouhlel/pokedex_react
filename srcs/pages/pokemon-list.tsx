import { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon.ts';
import Pokedex from '../models/pokedex.ts';
import PkmnCard from '../props/PkmnCard.tsx';

const PokemonList: FunctionComponent = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		setPokemons(Pokedex);
	}, []);

	return (
		<div className="App">
			<h1 className="center">Pokédex</h1>
			{pokemons.map((pokemon) => (
				<PkmnCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
}

export default PokemonList;