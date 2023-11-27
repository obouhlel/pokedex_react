import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pokemon from '../models/pokemon.ts';
import { formatDate } from '../helpers/format-date';
import { formatType } from '../helpers/format-type';
import '../styles/PkmnCard.css';

type PokemonProps = {
	pokemon: Pokemon;
	borderColor?: string;
}

const PkmnCard: FunctionComponent<PokemonProps> = ({ pokemon, borderColor = '#ccc' }) => {

	const [color, setColor] = useState<string>();
	const navigate = useNavigate();

	const showBorder = () => {
		setColor('#000000');
	}

	const hideBorder = () => {
		setColor(borderColor);
	}

	const goToPokemon = (id: number) => {
		navigate(`/pokemons/${id}`)
	}

	return (
		<div className="PkmnCard" onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder} style={{ borderColor: color }}>
			<div className="card-image">
				<img src={pokemon.picture} alt={pokemon.name} className="picture" />
			</div>
			<div className="card-information">
				<div className="card-content">
					<h2 className="name">{pokemon.name}</h2>
					<p style={{ fontStyle: 'italic' }}><small>Created : {formatDate(pokemon.created)}</small></p>
					{pokemon.types.map((type) => (
						<span key={type} className="type" style={{ backgroundColor: formatType(type) }}>{type}</span>
					))}
					{pokemon.moves.map((move) => (
						<div key={move} className="move">- {move}</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PkmnCard;