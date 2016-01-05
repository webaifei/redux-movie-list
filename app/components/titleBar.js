import React , { Component } from "react"
import { Link } from 'react-router'
/**
 * titleBar 组件
 * 组件内部应该不用关心 外部的数据  
 * 需要使用propType检测
 */
export default class TitleBar extends Component {

	render(){
		const { showAdd } = this.props;
		return (
			<div>
				<header className="ui-header ui-header-positive ui-header-stable ui-border-b">
				    <h1>movies-list</h1>
				    <Link to="/addfilm"><button className={"ui-btn"+(showAdd?" ":" ui-hidden")}>添加</button></Link>
				</header>
			</div>
		);
	}
}


//属性类型
TitleBar.propTypes = {
	showAdd: React.PropTypes.bool
}