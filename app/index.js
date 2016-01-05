import React, { Component } from "react"
var storage = require('storejs')
console.log( storage )
import { render } from 'react-dom'
import { Provider } from "react-redux"
import { Router , Route , Link , IndexRoute } from "react-router"
import { devTools } from 'redux-devtools'
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from "./container/app"
import FormAdd from './components/addFilm'
import FilmList from './components/filmList'
import FilmDetail from "./components/filmDetail"

import { store } from "./store/store"

//require css
require('./frozen/css/frozen.css')




render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}>
				<IndexRoute	 component={FilmList}/>
				<Route path="addfilm" component={FormAdd}/>
				<Route path="film/:id" component={FilmDetail}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)

 // render(
 // 	<Provider store={store}>
 // 		<App/>
 // 	</Provider>,
 // 	document.getElementById('app')

 // )