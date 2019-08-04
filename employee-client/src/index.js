import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Employees from './pages/Employees';
import Departments from './pages/Departments';

import Keycloak from 'keycloak-js';
import keycloakSettings from './keycloak.json'

const keycloak = Keycloak(keycloakSettings);	
keycloak.init({onLoad: 'login-required'}).success(authenticated => {

    if (!authenticated) {
        window.location.reload();
    } else {
    	keycloak.loadUserInfo().success(userInfo => {console.log(userInfo)});
        console.log('Authenticated!');
    }
	ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Employees}></Route>
		<Route path="/departments" component={Departments}></Route>
	</Router>,
	document.getElementById('root')
);
}).error(() => {
    console.error("Authenticated Failed");
});


