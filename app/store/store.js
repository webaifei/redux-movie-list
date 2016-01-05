import { createStore, combineReducers } from 'redux'
import state from '../reducers/index'

import { ADD_FILM, addFilm } from '../actions/actions'

var store = createStore( state )


export {
	store
}