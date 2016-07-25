const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const NODE_ENV          = process.env.NODE_ENV || 'development';
const DEVELOPMENT       = NODE_ENV === 'development';
const PRODUCTION        = NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});
const basePlugins = [
	HtmlWebpackPluginConfig,
	new ExtractTextPlugin("css/app-[hash].css"),
];

const devPlugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('development'),
		},
	}),
];

const prodPlugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production'),
		},
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress:{
			warnings: true
		}
	})
];


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
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss')
			}, {
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!sass?sourceMap')
			}
		]
	},

	sassLoader: {
		indentedSyntax: true
	},

	postcss: () => {
		return [
			autoprefixer
		];
	},

	devtool: DEVELOPMENT ? "source-map" : '',

	devServer: {
		inline: true,
		port: 3000
	},

	plugins: basePlugins.concat(DEVELOPMENT ? devPlugins : prodPlugins)
};