import React from 'react';

const PirateForm = (props) => {

  const shipOptions = props.ships.map((ship) => {
    return <option key={ship.id} value={ship._links.self.href}>{ship.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault()
    const pirate = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "age": event.target.age.value,
      "ship": event.target.ship.value
    }
    props.handlePiratePost(pirate)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="First Name" name="firstName"/>
    <input type="text" placeholder="Last Name" name="lastName"/>
    <input type="number" placeholder="Age" name="age"/>
    <select name="ship">
      {shipOptions}
    </select>
    <button type="submit">Save</button>
    </form>
  )
}

export default PirateForm;
