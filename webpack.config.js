const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/build',
		filename: "js/index.bundle-[hash].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css!postcss')
			}, {
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')
			}
		]
	},

	sassLoader: {
		indentedSyntax: true
	},

	postcss: function() {
		return [
			autoprefixer
		];
	},

	devtools: "source-map",

	devServer: {
		inline: true,
		port: 3000
	},

	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin("css/app-[hash].css")
	]
};