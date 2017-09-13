var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

	entry : './app/index.js',
	output :  {

		path :  path.resolve(__dirname, 'dist'),
		filename :  'index_bundle.js'
	},

	module : {
		// rules : [
		// 	{test : /\.(.js)$/, use : 'babel-loader'},
		// 	{ test : /\.css$/, use : ['style-loader', 'css-loader' 	]}
		// ]

		loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                //loaders: ["react-hot", 'babel-loader'],
                //query: {
                //    presets : ['es2015', 'react']
                //}
            },
            { test : /\.css$/, use : ['style-loader', 'css-loader' 	]}
        ]
	},

	plugins : [ new HtmlWebpackPlugin ({
		template : 'app/index.html'
	})]
}