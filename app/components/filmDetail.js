import React, { Component } from "react"
import { getDetailById } from '../actions/actions'
import { connect } from 'react-redux'

class FilmDetail extends Component{
	constructor(props) {
	    super(props);
	    
	}
	
	componentDidMount(){
		//获取对应的数据
		var id = this.props.params.id
		var dispatch = this.props.dispatch
		//dispatch the action 
		dispatch( getDetailById(id) )

	}
	render(){
		console.log( this.props, 'film detail')
		const { curFilm } = this.props;
		return (
			<div className="">
				<div className="ui-col ui-col-100">
					<div className="ui-whitespace">
						<h1>{curFilm.title}</h1>
					</div>


				</div>
				<div className="ui-row ui-col ">
					
					<img className="ui-col" src={curFilm.img} alt=""/>
				
				</div>
				<div className="">
					<p className="ui-whitespace">{curFilm.desc}</p>
				</div>
			</div>
			
		);
	}

}

function select ( state ){
	return {
		curFilm: state.curFilm
	}
}
export default connect(select)(FilmDetail)
