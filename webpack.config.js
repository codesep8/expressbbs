const path = require('path');

module.exports = {
  entry: './server.js', // Express 진입점
  target: 'node', // Node.js 환경에서 실행되므로 target 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js', // 번들된 파일명
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