var webpack = require('webpack')
var path = require('path');
var curEnv = require('./setEnv')

var openBrowserPlugin = require('open-browser-webpack-plugin')

var htmlPlugin = require('html-webpack-plugin')


var app = path.join(__dirname, 'app/')
var dist = path.join(__dirname, 'dist/')
module.exports = {
	entry:{
		index:path.join(app, 'index.js')
	},
	output: {
		path:dist,
		filename:"[name].bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
				query:{
					presets:['react', 'es2015']	
				}
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=8192'
			}
		]
	},
	plugins:[
		new htmlPlugin({
			inject:true,
			title:"movie-list",
			filename:'index.html',
			template: path.join(app, 'html','index.html')
		}),
		new openBrowserPlugin({
			url: curEnv+':3000'
		})


	],
	devServer:{
		contentBase:dist
	}


}