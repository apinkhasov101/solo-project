//! 'npm install express mongoose dotenv' installs all dependencies needed for mongoose and dotenv environment variables
// const express = require('express') old school syntax
import { resolve } from 'path';
console.log(resolve('./config/db.js')); // Check the resolved path
import express from 'express'; // modern syntax to import express lib
// add "type": "module" into package.json to use import export syntax
import dotenv from 'dotenv'; //^ package that imports dotenv functions
import connectDB from './config/db.js'; // Not destructured because export is export default connect DB in db.js
import clientRoutes from './routes/client.route.js'

dotenv.config(); //^ summons .config() from dotenv to run process.env on line 21

const app = express();
const PORT = process.env.PORT || 5001


app.use(express.json()); // middleware func that allows us to accept JSON data through req.body
//* Middleware is always executed before the matching route, regardless of method. However this one is provided by Express and handles next() internally


app.use("/clients", clientRoutes)


app.get('/', async (req, res) => {
  res.send('Server is ready yooo');
});


// console.log(process.env.MONGO_URI); //^ calls on MONGO_URI in .env file



app.listen(5001, () => {
  // database port
  connectDB();
  console.log('Server started at http://localhost:' + PORT);
});
// 'npm i nodemon -D' installs nodemon as dependency to monitor changes made in backend immediately on port 5001
// as edit "dev": "nodemon server/server.js", to account for this in package.json
