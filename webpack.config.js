const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	watch: true,

	target: 'electron-renderer',

	entry: './front/src/renderer_process.js',

	output: {
		path: `${__dirname}/front/build`,
		publicPath: 'front/build/',
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['react'],
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
				},
			},
		],
	},

	plugins: [
		new ExtractTextPlugin({
			filename: 'bundle.css',
			disable: true,
			allChunks: true,
		}),
	],

	resolve: {
		extensions: ['.js', '.json', '.jsx'],
	},

};
