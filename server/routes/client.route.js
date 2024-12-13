import express from "express"; // imports express from Express library to create routes, handle HHTP requests, and manage middleware
// import mongoose from 'mongoose'; //* gives us access to method mongoose.Types.ObjectId.isValid(id) in PUT
//^removed because we moved most of business logic that requires this import of funcs to controller
// import Client from './models/client.model.js';
//^removed because we moved most of business logic that requires this import of funcs to controller
import { deleteClient, getClient, updateClient } from "../controllers/client.controller.js"; // to have access to getClient func from controller
import { createClient } from "../controllers/client.controller.js";

const router = express.Router(); // express.Router() is func that allows you to modularize routing logic
//* instead of defining routes in server.js or app.jsm, can can use routers to define routes in separate modules. 
//? router obj is used to define the routes for this part of your app. You can define GET, POST, PUT, DELETE routes using this router.


// moved from server.js, originally called //* app.get('/clients', async (req, res) => {
router.get('/', getClient)
  
// moved from server.js, originally called //* app.post('/clients', async (req, res) => {
router.post('/', createClient)
  
  //app.patch -- updating SOME fields on data resource
  //app.put -- updating ALL fields on data resource
  

  // moved from server.js, originally called //* app.put('/clients/:id', async (req, res) => {
router.put('/:id', updateClient)
  
  // moved from server.js, originally called //* app.delete('/clients/:id', async (req, res) => {
router.delete('/:id', deleteClient)

export default router; //~ exports router obj from this file for other files to import this obj and use it