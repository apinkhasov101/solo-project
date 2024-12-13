import React, { Component } from "react"; // import react from react library, Now you can directly use Component without the React. prefix 
// import ReactDom from "react-dom"; // import react-dom from REACT 17
import App from './components/App.js'; // import App from  components file
import { createRoot } from "react-dom/client"; // new React 18 import method

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO   React Environment consists of a JS transpiler & module bundler.

//&     What is a transpiler: React requires latest version of JS (arrow func, class syntax, etc.), some browsers don't understand this syntax, thus we need a transpiler to convert es5 & es6 code to code browsers understand. -> BABEL

//*     What is a module bundler: takes a bunch of files (JS, imgs, style sheets, etc.) and bundles them into smaller group of files. Used to manage dependency relationships in React (loading modules in correct order). -> WEBPACK
             // Webpack also creates a dependency graph to import modules that're dependent on one another in correct order.
             // Bundlify, Gulp also options, but Webpack is most common with React.

//^     'npm init -y' creates our npm project + package.JSON to keep track of dependencies, dev dependencies, metadata, etc.
             // -y is a shortcut to provide all defaults when creating npm project.

//      'npm install express mongoose dotenv' --- installs all these packages and their environment variables

//      Add "type": "module" to package.json to utilize new express syntax of import... from

//!      'npm install react' installs React Library to your folder/project.

//?     'npm install react-dom' acts as a glue between react and the DOM (Document Object Model).
        // DOM - HTML doc becomes tree structure where each node is an obj representing a part of the doc, when site is loaded, browser creates a DOM of that page. React-Dom provides methods to use at top level of the web app.

//~     'npm install webpack --save-dev' makes it so webpack is only needed in dev of our app, not during prod.

//TODO  'npm install webpack-cli --save-dev' (command line interface) provides set of commands to increase speed + efficiency
        // commands include 'run webpack', and other commands.

//*     'npm install webpack-dev-server --save-dev' dev dependency that starts a live-reloading server with single command

//^     'npm install @babel/core --save-dev' dev dependency, core file is the code transpiler

//!     'npm install babel-loader --save-dev' dev dependency installs loader which is what webpack uses to process dif file types as they're loaded/imported. Dif file types use dif loaders (Babel - JS, SAS - CSS, Style Loader - Adds CS w/ Style tags)

//?     'npm install @babel/preset-react --save-dev' dev dependency, preset-react package contains plugins that support language features which adds support for JSX and es15

//~     'npm install @babel/preset-env --save-dev' allows use of latest JS code without worrying about syntax that's needed by target environments i.e. browser, and makes JS bundles smaller.

//TODO  'npm install html-webpack-plugin' dev dependency that simplifies adding bundled files to our HTML file

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ReactDOM.render(<App />, document.getElementById('root')); 
// loading our App component to an HTML element of 'root' in React 17

// New React 18
const root = createRoot(document.getElementById('root'));
root.render(<App />);
