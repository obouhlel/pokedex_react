import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FunctionComponent = () => {
	return (
		<div className="PageNotFound">
			<p>Page not found</p>
			<Link to="/pokemons">Back</Link>
		</div>
	)
};

export default PageNotFound;