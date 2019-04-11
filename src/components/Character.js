import React from 'react';

const Character = (props) => {
	return <li className={props.character.name}>{props.character.name}</li>;
};

export default Character;
