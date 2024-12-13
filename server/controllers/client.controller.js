import Client from "../models/client.model.js"; 
import mongoose from "mongoose";
 
 export const getClient = async (req, res) => {
    try {
      const clients = await Client.find({}); // empty {} means fetch all Clients saved in database
      res.status(200).json({ success: true, data: clients });
    } catch (error) {
      console.log('error in fetching clients:', error.message); // debugging in terminal purposes
      res.status(500).json({ success: false, message: 'Server Error' }); // 500 status code because it denotes internal server error
    }
  };
  
  export const createClient = async (req, res) => {
    // make func async to use await keyword
    const clientInfo = req.body; // user will send this data
  
    if (
      !clientInfo.firstName ||
      !clientInfo.lastName ||
      !clientInfo.tel ||
      !clientInfo.descriptionOfProblem ||
      !clientInfo.dropOffDate
    ) {
      return res
        .status(400)
        .json({ success: false, message: 'Please provide all necessary fields' });
    } // error handling in case user didn't fill out all fields
  
    const newClient = new Client(clientInfo); // clientInfo inputted by user is inserted into Client schema to create their profile
  
    try {
      await newClient.save(); // saves to db
      res.status(201).json({ success: true, data: newClient }); // 201 means something was successfully created,  // res.data is custom property added to res
    } catch (error) {
      console.error('Error in creating client', error.message); // for debugging purposes while creating client. High-lvl view of error
      console.error('Validation Error', error); // logs entire error obj, //! useful when dealing with Mongoose validation errors b/c full error obj has details like name and errors field specific messages.

  
      if (error.name === 'ValidationError') {
        // Extract validation error messages, mongoose throws 'ValidationError' when error
        const messages = Object.values(error.errors).map((err) => err.message); // error.errors is predefined field in Mongoose when a validation error occurs. It is obj when key is name of field that failed validation, value is error obj with details about the specific validation failure
        return res.status(400).json({ message: messages.join(', ') });
      }
  
      res.status(500).json({ success: false, message: 'Server Error' }); // 500 status code because it denotes internal server error
    }
  }; 

  export const updateClient = async (req, res) => {
    const { id } = req.params; // destructuring id from the req.params
    const client = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      //* method provided by Mongoose to check whether id provided is valid
      return res.status(404).json({ message: 'Client not found. ID not valid.' });
    }
  
    try {
      const updatedClient = await Client.findByIdAndUpdate(id, client, { //! findByIdandUpdate doesn't trigger Mongoose validations unless the { runValidators: true } option is explicitly provided
        new: true,
        runValidators: true, //! This ensures that validation runs on updates

      }); // func used to find matching doc by its _id, update it w/ new data //? {new:true} returns the object after update was applied
      res.status(200).json({ success: true, data: updatedClient });
    } catch (error) {
        console.error('Error in creating client', error.message); // for debugging purposes while creating client. High-lvl view of error
        console.error('Validation Error', error); // logs entire error obj, //! useful when dealing with Mongoose validation errors b/c full error obj has details like name and errors field specific messages.
        if (error.name === 'ValidationError') {
          // Extract validation error messages, mongoose throws 'ValidationError' when error
          const messages = Object.values(error.errors).map((err) => err.message); // error.errors is predefined field in Mongoose when a validation error occurs. It is obj when key is name of field that failed validation, value is error obj with details about the specific validation failure
          return res.status(400).json({ message: messages.join(', ') });
        }
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };

  export const deleteClient = async (req, res) => {
    //:id is dynamic, //!specific :routes should always come before general /routes
    const { id } = req.params; // destructuring id from the req.params
    // console.log("id", id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        //* method provided by Mongoose to check whether id provided is valid
        return res.status(404).json({ message: 'Client not found. ID not valid.' });
      }

    try {
      await Client.findByIdAndDelete(id); // func used to find matching doc, remove it, & pass found doc (if any) to callback
      res.status(200).json({ success: true, message: 'Client deleted' }); // res.message is custom property added to res
    } catch (error) {
      console.log('error in deleting client:', error.message); // debugging in terminal purposes
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }; 