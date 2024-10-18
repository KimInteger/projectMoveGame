const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 모드 설정
  entry: './src/index.tsx', // 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 출력 경로
    filename: 'bundle.js', // 출력 파일 이름
    publicPath: './', // 상대 경로로 변경
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader', // babel-loader 사용
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'), // public 폴더의 index.html 파일 경로
      filename: 'index.html', // 출력할 HTML 파일 이름
    }),
  ],
};
