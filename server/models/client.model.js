// can name this file client.js, Client.js, or client.model.js
import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    // putting 'new' is optional
    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    tel: {
      type: String, // JS doesn't recognize numbers that begin with 0, so must be made String type in case tel starts with 0
      
      match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, 'Phone # is not valid'], // simple checker for xxx-xxx-xxxx format
      
      required: true,
    },

    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },

    descriptionOfProblem: { type: String, required: true },
    dropOffDate: { type: Date, required: true },
    pickUpDate: { type: Date },
    gearSerialNum: { type: String },
    caseIncluded: { type: Boolean },
    notes: { type: String },
    image: { type: String },
  },
  {
    timestamps: true, // gives createdAd and updatedAt fields on each Doc for Clients
  }
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
