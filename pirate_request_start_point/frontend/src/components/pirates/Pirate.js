import React  from 'react';
import { Link } from 'react-router-dom'

const Pirate = (props) => {

  const {firstName, lastName, age, ship, id} = props.pirate
  return (
    <div className="component">
    <Link to={'/pirates/' + id}
      className="name">{firstName} {lastName}
      </Link>
      <p>Age: {age}</p>
      <p>Ship: {ship.name}</p>
    </div>
  )
}

export default Pirate;
