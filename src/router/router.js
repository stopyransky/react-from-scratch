import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// import TodoApp from 'TodoApp';
import TodoApp from '../components/TodoApp';
import TodoLogin from '../components/TodoLogin';
import firebase from './../firebase/index.js';


var redirectIfLogin = (nextState, replace, next) => {
	// console.log(firebase.auth())
	if(firebase.auth().currentUser) {
		// user is logged in
		replace('/todo');
	}
	next();
};

var requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser) {
		// nobody is logged in - move to root which by default is TodoLogin
		replace('/');
	}
	next();
};




const App = props => <div id='app'>{props.children}</div>;

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={TodoLogin} onEnter={redirectIfLogin}/>
			<Route path="todo" component={TodoApp} onEnter={requireLogin}/>
		</Route>
	</Router>
);
