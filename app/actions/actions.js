/**
 * actions
 */

export const ADD_FILM = 'ADD_FILM'

/**
 * 添加电影动作
 * 异步操作
 * 这里不要放置太多的逻辑处理
 */
export function addFilm( data ){
	var data = data || {};
	return {
		type: ADD_FILM,
		data:{
			title: data.title,
			desc: data.desc,
			img: data.img
		} 
	}
}

