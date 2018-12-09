import React, {Component} from 'react';
import PirateList from '../../components/pirates/PirateList.js';
import Request from '../../helpers/request.js';


class PirateContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pirates: []}
  }

  //waits for whole app to load before loading contents...
  componentDidMount(){
    let request = new Request()
    request.get('/api/pirates').then(data => {
      this.setState({pirates: data._embedded.pirates})
    })
  }


  render(){
    return (
      <PirateList pirates={this.state.pirates}/>
        
    );
  }
}

export default PirateContainer;
