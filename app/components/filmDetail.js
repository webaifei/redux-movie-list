import React, { Component } from "react"
import { connect } from 'react-redux'

class FilmDetail extends Component{
	constructor(props) {
	    super(props);
	    this.state = { 
	    	title:'',
	    	desc:'',
	    	img:''

	    };
	}
	
	componentDidMount(){
		//获取对应的数据
	}
	render(){
		console.log( this.state )
		const item = this.state;
		return (
			<div className="ui-panel">
				<div className="ui-row">
					<div className="ui-whitespace">
						<h1>{item.title||'ncie'}</h1>
					</div>

				</div>
				<div className="ui-row">

				</div>
			</div>
			
		);
	}

}


export default connect()(FilmDetail)
