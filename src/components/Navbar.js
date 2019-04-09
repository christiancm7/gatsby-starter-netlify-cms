import React from "react";
import { Navbar } from 'react-bootstrap';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
    <Nav>
      <div class="logo">
    <img src="img/logo.svg"/>
</div>
<ul>
    <li><a href="/about.html" class="selected">Home</a></li>
    <li><a href="/about.html">About</a></li>
    <li><a href="/about.html">Work</a></li>
    <li><a href="/about.html">Contact</a></li>
</ul>
      </Nav>
    );
  }
};

export default Navbar;
