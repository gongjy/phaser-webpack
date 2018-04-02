const path = require('path');
const phaserModulesPath =  path.join(__dirname, '/node_modules/phaser-ce/');
const Phaser =  path.join(phaserModulesPath, "build/custom/phaser-split.min.js");
const PIXI = path.join(phaserModulesPath, 'build/custom/pixi.js');
const P2 = path.join(phaserModulesPath, 'build/custom/p2.js');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]?[hash:8]'
                }
            },
            {
                test: require.resolve(PIXI),
                use: 'expose-loader?PIXI'
            },
            {
                test: require.resolve(P2),
                use: 'expose-loader?p2'
            },
            {
                test: require.resolve(Phaser),
                use: 'expose-loader?Phaser'
            }
        ]
    },
    resolve: {
        alias: {
            "Phaser": Phaser,
            "PIXI": PIXI,
            "P2": P2
        }
    }
}