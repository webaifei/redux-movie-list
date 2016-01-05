import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
/**
 * 配合路由情况下 对于每一个单独的view 都需要使用connect 来链接store和component
 */
class FilmList extends Component {




	render (){
		const { filmList , dispath } = this.props;
		console.log( this.props )
		return (
			<section className="ui-panel ui-col pd-t-45">
			    
			    <ul className="ui-grid-halve">
			    	{
			    		filmList.map(function ( item , index ){
			    			var link = "/film/"+index;
			    			return (
			    				<li key={index}>
			    				    <div className="ui-border ">
			    				       <Link to={link}>
			    				       	<div className="ui-grid-halve-img">
			    				       	    <span ><img src={item.img} alt=""/></span>
			    				       	</div>
			    				       	<div>
			    				       	    <h4 className="ui-nowrap-multi">{item.desc}</h4>
			    				       	    <h5 className="ui-nowrap">{item.title}</h5>
			    				       	</div>
			    				       </Link>
			    				    </div>
			    				</li>
			    			)
			    		})

			    	}
			        
			        
			    </ul>
			</section>

		)
	}
}
//propTypes validator
FilmList.propTypes = {
	filmList: React.PropTypes.array
}
function select (state){
	return {
		filmList: state.filmList
	};
}
export default connect(select)(FilmList)