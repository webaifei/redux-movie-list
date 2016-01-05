/**
 * filmRducer
 */
import { ADD_FILM, addFilm } from '../actions/actions'
var storage = require('storejs')




export default function filmRducer( state = [], action ){
	var item = action.data;
	
	if( !storage.has('filmlist') ){
		storage.set('filmlist', [])
	}
	state = storage.get('filmlist');
	

	switch( action.type ){
		
		case ADD_FILM:
			//send ajax request to store data 
			//and check the result 
			//then handle error and succuss
			
			state.unshift( action.data );
			storage.set('filmlist', state)
			return state;
		default:

			return state;
	}

}