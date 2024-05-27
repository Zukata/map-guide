import React, { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import Hamburger from './component/Hamburger/Hamburger';
import Backdrop from './component/Backdrop/Backdrop';
import Map from './component/Map/Map';
import { FontAwesomeIcon } from '../node_modules/@fortawesome/fontawesome-free'


class App extends Component {

  state = {

hamburgerOpen: false

  };
toggleClickHandler = () => {
this.setState((prevState) => {

  return{hamburgerOpen: !prevState.hamburgerOpen}
});


};



backdropClickHandler = () => {

  this.setState({hamburgerOpen: false});

};


  render()
{

  
  let backdrop;


  if(this.state.hamburgerOpen){
    
    backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
  return(
    <div style={{height: '100%'}}>
<Toolbar toggleClickHandler = {this.toggleClickHandler} />

<Hamburger show={this.state.hamburgerOpen} />
{backdrop}
<Map></Map>

    
    </div>
  );
}
}

export default App;
