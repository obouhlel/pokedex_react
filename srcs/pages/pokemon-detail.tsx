import { FunctionComponent, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Pokedex from '../models/pokedex';
import Pokemon from '../models/pokemon';
// import formatDate from '../helpers/format-date';
// import formatType from '../helpers/format-type';

const PokemonDetail: FunctionComponent = () => {
	const { id } = useParams<{ id: string }>();
	const [pokemon, setPokemon] = useState<Pokemon|null>(null);

	useEffect(() => {
		const foundPokemon: Pokemon | undefined = Pokedex.find((p) => id === p.id.toString());
		setPokemon(foundPokemon || null);
	}, [id]);
	
	return (
		<div className="PokemonDetail">
			{pokemon ? (
				<div>
					<h1>{pokemon.name}</h1>
					<img src={pokemon.picture} alt={pokemon.name} />
					<Link to="/pokemons">Back</Link>
				</div>
			) : (
				<div>
					<p>Pokemon id not set</p>
					<Link to="/pokemons">Back</Link>
				</div>
			)}
		</div>
	)
};

export default PokemonDetail;