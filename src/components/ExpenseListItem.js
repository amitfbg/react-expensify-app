//Export a stateless functional compoent
//description,amount,

import React from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//moment for data and time convert and format
import moment from 'moment';
//install numeral for currency converter
import numeral from 'numeral';

const ExpenseListItem=({id,description,amount,createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
    <p>
    {numeral(amount/100).format('$0,0.00')} 
     -  
    {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    </div>
);

export default ExpenseListItem;
//export default ExpenseListItem;