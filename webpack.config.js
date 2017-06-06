var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

var webpack = require('webpack');

module.exports = {
	
	entry: path.resolve(ROOT_PATH, 'app/main'),
	
	output: {
	
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},

	devServer: {
		// colors: true,
		historyApiFallback: true,
		hot: true,
		inline: true,
		// progress: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	],
};