import { createStore, combineReducers } from 'redux'
import curFilm from './curFilmReducer'
import filmList from '../reducers/filmReducer'


export default combineReducers({
	curFilm,
	filmList
})
