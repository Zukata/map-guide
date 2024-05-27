import React from 'react';
import './Hamburger.css';

const hamburger = props => {
let hamburgerClass = 'side-hamburger';
if(props.show){
    hamburgerClass = 'side-hamburger open';
}
return (
<nav className={hamburgerClass}>

<ul>

<li><a href="/">side1</a></li>
<li><a href="/">side1</a></li>
<li><a href="/">side1</a></li>

</ul>


</nav>

);

};



export default hamburger;