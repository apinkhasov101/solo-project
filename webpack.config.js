//! This is the old CommonJS way:
//! const path = require ('path')
//! const HTMLWebpackPlugin = require('html-webpack-plugin');

//! module.exports = { // we want everything in this file to exported

import path from 'path';
import { fileURLToPath } from 'url';
import HTMLWebpackPlugin from 'html-webpack-plugin';  //we want our bundled JS file to be loaded into an HTML file, and we do this with the HTML webpack Plugin. 


// boilerplate code required to replicate CommonJS-style __dirname and __filename behavior in an ES module.
const __filename = fileURLToPath(import.meta.url); // Converts the import.meta.url into a standard file system path
const __dirname = path.dirname(__filename); // Extracts the directory name from the file path.

export default {

    entry: "./src/index.js", // entry point (where app begins)  of our app needs to be specified

    output: {
        path: path.resolve(__dirname, '/dist'), // specifies output location, location stays dynamic with __dirname
        filename: 'bundle.js'
    }, //specifies the name and path of our production build, takes all our code and bundles it as bundle.js

    mode: 'development',

    plugins: [
        new HTMLWebpackPlugin({ // registers HTML webpack plugin
            template: './src/index.html' // tells webpack to inject bundles files into HMTL file specified.
        })
    ],
    module: {
        rules: [ // specifies how modules are created (and array ob obj)
            {
               test: /\.jsx?/, // babel will transpile all files ending in .js or .jsx
               exclude: /node_modules/, // make sure it doesn't transpile files in node_module. They're our libraries
               use: {
                loader: 'babel-loader', // use label loader, specify
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'] // use these presets that were installed
                }
               } 
            }
        //    rules: {
        //         test: /\.s[ac]ss$/i,
        //         use: [
        //           // Creates `style` nodes from JS strings
        //           'style-loader', //& takes SASS and makes it regular CSS injects into DOM as <style> tags</style>
        //           // Translates CSS into CommonJS
        //           'css-loader', //& resolves @ import (--fonts) and url()  (--backgrounds) tags
        //           // Compiles Sass to CSS
        //           'sass-loader', //& compiles SASS/SCSS to CSS, and uses the node-sass package under the hood
        //         ],
        //       },
        ]
        // using babel loader to pass in module obj to determine how they will be treated
    }
}

console.log('Output path:', path.join(__dirname, '/dist'));
