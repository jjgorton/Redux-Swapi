import React from 'react';

import Character from './Character';

const CharacterList = (props) => {
	return (
		<ul>
			<li className="first">Star Wars</li>
			{props.characters.map((character, index) => {
				return <Character key={character.name} character={character} />;
			})}
		</ul>
	);
};

export default CharacterList;
