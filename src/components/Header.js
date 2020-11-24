import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

const Header=()=>(
    <header>
    <h1>Expensifyyy</h1>
    <h3><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></h3>
    <h3><NavLink to="/create" activeClassName="is-active">Create</NavLink></h3>
    <h3><NavLink to="/help" activeClassName="is-active">Help</NavLink></h3>
    </header>

);

export default Header;