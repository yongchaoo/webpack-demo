const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
    	filename: 'main.js',
	  path: path.resolve(__dirname, 'dist')
    },
    module: {
     rules: [
      // 配置css
	    {
	        test: /\.css$/,
	        use: [
	           'style-loader',
	           'css-loader'
	        ]
	    },
       // 配置图片资源
      {
	        test: /\.(png|svg|jpg|gif)$/,
	        use: [
	           'file-loader'
	        ]
      },
      // 配置字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
      },
       // 配置xml文件
      {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
      }
     ]
   }
};

