import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=()=>(
    <header>
    <h1>Portfolio</h1>
    <h3><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></h3>
    <h3><NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink></h3>
    <h3><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></h3>
    </header>

);

export default Header;