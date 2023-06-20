import { resolve } from 'path';

export const entry = './js/script.js';
export const output = {
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, './'),
  filename: 'main.js',
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    },
  ],
};
