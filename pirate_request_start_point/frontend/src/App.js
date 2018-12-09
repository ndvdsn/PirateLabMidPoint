import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js';
import SinglePirateContainer from './containers/pirates/SinglePirateContainer';
import PirateFormContainer from './containers/pirates/PirateFormContainer';

import PirateContainer from './containers/pirates/PirateContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Switch>
            <Route exact path="/pirates" component={PirateContainer} />
            <Route exact path="/pirates/new" component={PirateFormContainer} />
            <Route exact path="/pirates/:id" render={(props) => {
              const id = props.match.params.id
              return <SinglePirateContainer id={id} />
            }}/>
          </Switch>


          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
