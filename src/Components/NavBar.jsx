// import React from 'react';
// import {  Link } from "react-router-dom";


const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">userProfile</Link>
    </li>
    <li>
      <Link to="/">contacts</Link>
    </li>
    <li>
      <Link to="/"></Link>
    </li>
    <li>
      <Link to="/">posts</Link>
    </li>
  </div>
  );
}
export default Navbar;