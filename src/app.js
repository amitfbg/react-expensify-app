import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store=configureStore();

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>

    
);


//for expensify-app component folder
import AppRouter from './routers/AppRouter';
ReactDOM.render(jsx,document.getElementById('app'));

//for component 2 which is Portfolio page component2 folder
//import AppRouter2 from './routers/AppRouter2';
//ReactDOM.render(<AppRouter2/>,document.getElementById('app'));

