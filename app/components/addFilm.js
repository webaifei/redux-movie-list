import React, { Component } from "react"
import { connect } from "react-redux"
import { addFilm } from "../actions/actions"
/**
 * 在组件内部 需要触发action
 * dispatch and action 都要引入
 * 
 */
class FormAdd extends Component {


	onSubmit(e){
		e.preventDefault();
		var titleInput = this.refs.title,
			descInput = this.refs.desc,
			imgInput = this.refs.img;
		//校验数据合法性
		var data = {},
			imgReg = /\.(jpe?g|png|gif)$/,
			title = titleInput.value.trim(),
			desc = descInput.value.trim(),
			img = imgInput.value.trim();

		//这里是真正的触发dispath 的地方
		const { dispatch, history } = this.props;

		if( title&& desc && imgReg.test(img) ){
			data.title = title;
			data.desc = desc;
			data.img = img;

			//触发动作
			dispatch(addFilm(data))
			history.goBack()
		}else{
			//show the pop 
		}
		
	}

	render (){
		
		return (
			<div className="ui-form ui-border-t">
			    <form onSubmit={this.onSubmit.bind(this)}>
			        <div className="ui-form-item ui-border-b">
			            <label >
			                电影名称
			            </label>
			            <input ref='title' type="text" placeholder="输入电影名称"/>
			            
			        </div>
			        <div className="ui-form-item ui-form-item-textarea ui-border-b">
			            <label>
			                电影简介
			            </label>
			            <textarea ref='desc' placeholder="输入电影简介"></textarea>
			        </div>
			        <div className="ui-form-item  ui-border-b">
			            <label >
			                海报地址
			            </label>
			            <input type="text" ref='img' placeholder="输入电影海报地址"/>
			           
			        </div>
			        <div className="ui-footer ui-footer-stable ui-btn-group ui-border-t">
			            <button className="ui-btn-lg" type="reset">
			                重置
			            </button>
			          
			            <button className="ui-btn-lg ui-btn-primary">
			                添加
			            </button>
			        </div>
			    </form>
			</div>
		)
	}
}
//使用connect 将dispatch传递到自组建
export default connect()(FormAdd)