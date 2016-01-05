import { GET_DETAIL, getDetailById } from '../actions/actions'
var storage = require('storejs')

export default function curFilm( state = {}, action ){
	if( !storage.has('filmlist') ){
		storage.set('filmlist', [])
	}
	//从服务器端获取怎么玩
	var list = storage.get('filmlist');

	switch( action.type ){
		case GET_DETAIL:
			var item = list[action.id]
			return Object.assign({}, item)
		default:
			return state;
	}
}