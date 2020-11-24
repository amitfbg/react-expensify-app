import React from 'react';

const PortfolioOutPage=(props)=>(
    <div>
        <h1>Description</h1>
        <p>This is My Work {props.match.params.id}</p>
    </div>
);




export default PortfolioOutPage;