import React, { useState } from 'react'; //? we want to destructure Component from react library because //* old method as well, not necessary inside a .jsx file (but we're in .js)
//class App extends Component { //* extending the react Component class gives us access to the component lifecycle methods, ie. render
import './App.css';

function App() {
  //~ functional components are the recommended way to write React components now

  //! This app doesn't track live updates to the input form. useState is not necessary. The submission form logic via handleSubmit is inputting values at the time of form submission using form data. Form data extract the inputs from the elements directly via their name attributes.
  //* The form handles data "statically" meaning data is collected all at once rather than managed interactively while user is typing.
  //^ Not a detriment when sending Data to the backend because state is irrelevant to the backend. It only cares about the submitted data as long as it's correctly, structured in your request as JSON.
  //& useState is useful to provide immediate feedback, i.e. live validation for inputs like emails or passwords, or to dynamically update other UI elements based on input values.

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // console.log('First Name:', firstName);
    // console.log('Last Name:', lastName);
    // console.log('Tel:', tel);
    // console.log('Email:', email);
    // console.log('Problem,:', problem);
    // console.log('Drop-off Date,:', dropOffDate);
    // console.log('Pick-up Date:', pickUpDate);
    // console.log('Serial Number:', serNum);
    // console.log('Case Included:', cases);
    // console.log('Notes:', notes);
    // Do something with the form data, e.g., send it to an API

    const formData = new FormData(e.currentTarget); // FormData provided by JS API Extract all form fields and their values from the form element and returns them as object like data.//* When client clicks submit button, the onSummit event is triggered, and JS looks for element that has onSubmit handler. Here is <form> element, so e.currentTarget points to it
    //! e.currentTarget represents <form> DOM element where event listener is set up. Data inside form at that moment is fetched separately (via new FormData(e.currentTarget)).

    //TODO const email =formData.get('email')
    for (let [key, value] of formData.entries()) {
      console.log({ key, value });
    }
    //TODO console.log({email})
  };

  return (
    <main>
      <h1> GRIMS </h1>
      <h2> 🎸 Guitar Repair Inventory Management System 🎸</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type='text' name='firstName' placeholder='Required' />
        </label>
        <br></br>
        <label>
          Last Name:
          <input type='text' name='lastName' placeholder='Required' />
        </label>
        <br></br>
        <label>
          Tel:
          <input
            type='tel'
            name='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            required
            placeholder='XXX-XXX-XXXX (Required)'
          />
        </label>
        <br></br>
        <label>
          Email:
          <input type='email' name='email' placeholder='not@required.com' />
        </label>
        <br></br>

        <label>
          Description of Problem:
          <input
            id='textarea'
            name='problem'
            placeholder='Required: details about repair'
          />
        </label>
        <br></br>

        <label>
          Drop-off Date:
          <input type='date' name='dropOff' />
        </label>
        <br></br>

        <label>
          Pick-Up Date:
          <input type='date' name='pickUp' />
        </label>
        <br></br>

        <label>
          Serial Number:
          <input type='text' name='serialNum' />
        </label>
        <br></br>

        <label>
          Case Included:
          <input type='radio' name='case' />
        </label>
        <br></br>

        <label>
          Notes:
          <input id='textarea2' name='notes' placeholder='MISC' />
        </label>
        <br></br>

        <button type='submit' className='button'>
          Submit
        </button>
        <br></br>
      </form>
    </main>
  );
}

//^ make sure tel input as tel works instead of string //
//* React uses className instead of class for CSS classes for <button></button>
// components cannot be at a top level. must be at source level

export default App;
