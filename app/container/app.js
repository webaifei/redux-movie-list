import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from "../store/store"
import { addFilm } from "../actions/actions"
import FormAdd from '../components/addFilm'
import TitleBar from '../components/titleBar'

class App extends Component {

	render(){
		console.log( this.props, 'app props')
		const { pathname } = this.props.location;

		return (
			<div>
				
				<TitleBar showAdd={pathname!=="/addfilm"}/>
				<section className="ui-container ui-center">
				   {
				   	this.props.children
				   }
				</section>

				
			</div>
		)
	}
}
/**
 * state 就是redux store 的整个数据
 * 返回的对象的键值是否必须要和原store中的key保持一致
 * 
 */
function select (state){
	return {
		filmList: state.filmList
	};
}
function mapActionToProps(dispatch){
	return {

	}
}
/**
 * 通过connect将store传递和dispatch到app中去
 */
export default connect()(App)

