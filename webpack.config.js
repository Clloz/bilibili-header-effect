/*
 * @Author: Clloz
 * @Date: 2020-10-10 11:23:37
 * @LastEditTime: 2020-10-10 11:24:55
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /bilibili-header/webpack.config.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
module.exports = {
    entry: './main.js',
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        /*plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]],*/
                    },
                },
            },
        ],
    },
    mode: 'development',
};
