import React from 'react';
import Pirate from './Pirate.js';


const PirateList = (props) => {

	const pirates = props.pirates.map(pirate => {
		return (
			<li key={pirate.id} className="component-item">
				<Pirate pirate={pirate} />
			</li>
		)
	})
	return (
		<ul>
			{pirates}
		</ul>

	)
}
 export default PirateList;
