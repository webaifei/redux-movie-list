import { createStore, combineReducers } from 'redux'
import filmList from '../reducers/filmReducer'

import { ADD_FILM, addFilm } from '../actions/actions'
var rootReducer = combineReducers({
	filmList
})
var store = createStore( rootReducer )


export {
	store
}