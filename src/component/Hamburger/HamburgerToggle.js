import React from 'react';
import './HamburgerToggle.css';


const hamburgerToggle = props => (

<button className="toggle-button" onClick={props.click}>

<div className="toggle-button-line" />
<div className="toggle-button-line"/>
<div className="toggle-button-line"/>

</button>


);



export default hamburgerToggle;