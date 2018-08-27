// startup point for client side application
import 'babel-polyfill'; 

import React from 'react';
import ReactDom from 'react-dom';
import Route from './Route';
import {BrowserRouter} from 'react-router-dom'
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import {renderRoutes} from 'react-router-config'
const store = createStore(reducers ,{} , applyMiddleware(thunk) )

ReactDom.hydrate( 
<Provider store={store}>
<BrowserRouter>
    <div>
    {renderRoutes(Route)}
</div>
</BrowserRouter> 
</Provider>


,document.getElementById('root'))
