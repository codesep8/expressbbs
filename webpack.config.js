const path = require('path');

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js', // 번들된 파일명
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 .js 파일에 Babel 로더 적용
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 최신 JavaScript 문법 변환
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // 확장자 생략 가능
  },
};