import React from 'react';
import {NavLink} from 'react-router-dom';


const PortfolioPage=()=>(
    <div>
        <h1>My Work</h1>
        <p>CheckOut Below.....</p>
        <h3><NavLink to="/portfolio/1">Click</NavLink></h3>
    </div>
);




export default PortfolioPage;