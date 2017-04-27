const webpack = require("webpack");
const path = require("path");
module.exports = {
	entry: path.resolve(__dirname, "src/main.js"),
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'index.js',
		library: 'vue2-barrage',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader'
			}
		},{
			test: /\.css$/, 
			use: [{
				loader:"style-loader"
			},{
				loader:"css-loader"
			}]
		}]
	},
	plugins: [
	new webpack.optimize.UglifyJsPlugin({
		beautify: false,
		comments: false,
		compress: {
			warnings: false,
			drop_console: false,
		},
		sourceMap: true
	})
	],
	devtool: 'cheap-module-source-map',
};
