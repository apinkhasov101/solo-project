import React, { useState } from 'react' // we want to destructure Component from react library because //* old method as well, not necessary inside a .jsx file (but we're in .js)
//class App extends Component { //* extending the react Component class gives us access to the component lifecycle methods, ie. render
import "./App.css"

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProb] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [serNum, setSerNum] = useState('');
  const [cases, setCase] = useState('');
  const [notes, setNotes] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Tel:', tel);
    console.log('Email:', email);
    console.log('Problem,:', problem);
    console.log('Drop-off Date,:', dropOffDate);
    console.log('Pick-up Date:', pickUpDate);
    console.log('Serial Number:', serNum);
    console.log('Case Included:', cases);
    console.log('Notes:', notes);
    // Do something with the form data, e.g., send it to an API
  };

  return (
        <>
        <h1> GRIMS </h1> 
        <h2> 🎸 Guitar Repair Inventory Management System 🎸</h2>
      <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" placeholder="Required" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </label>
      <br></br>
      <label>
        Last Name:
        <input type="text" placeholder="Required" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <br></br>
      <label>
        Tel:
        <input type="text" placeholder="XXX-XXX-XXXX (Required)" value={tel} onChange={(e) => setTel(e.target.value)} />
      </label>
      <br></br>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br></br>

      <label>
        Description of Problem:
        <input id="textarea" placeholder="Required: details about repair" value={problem} onChange={(e) => setProb(e.target.value)} />
      </label>
      <br></br>

      <label>
        Drop-off Date:
        <input type="date" value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} />
      </label>
      <br></br>

      <label>
        Pick-Up Date:
        <input type="date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
      </label>
      <br></br>

      <label>
        Serial Number:
        <input type="text" value={serNum} onChange={(e) => setSerNum(e.target.value)} />
      </label>
      <br></br>

      <label>
        Case Included:
        <input type="radio" value={cases} onChange={(e) => setCase(e.target.value)} />
      </label>
      <br></br>

      <label>
        Notes:
        <input id="textarea2" placeholder="MISC" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <br></br>

      <button type="submit" class="button">Submit</button>
      <br></br>

    </form>
    </>
  );
}

// components cannot be at a top level. must be at source level

export default App;