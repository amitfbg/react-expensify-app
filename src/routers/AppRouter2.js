import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components2/Header';
import HomePage from '../components2/HomePage';
import PortfolioPage from '../components2/PortfolioPage';
import ContactPage from '../components2/ContactPage';
import NotFoundPage from '../components2/NotFoundPage';
import PortfolioOutPage from '../components2/PortfolioOutPage';


const AppRouter2=()=>(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/portfolio" component={PortfolioPage} exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioOutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route component={NotFoundPage}/>
        </Switch> 
    </div>             
    </BrowserRouter>
);

export default AppRouter2;