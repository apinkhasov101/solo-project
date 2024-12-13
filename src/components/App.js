import React, { useState } from 'react' // we want to destructure Component from react library because //* old method as well, not necessary inside a .jsx file (but we're in .js)
//class App extends Component { //* extending the react Component class gives us access to the component lifecycle methods, ie. render
import "./App.css"

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Name:', name);
    console.log('Email:', email);
    // Do something with the form data, e.g., send it to an API
  };

  return (
        <>
        <h1> GRIMS </h1> 
        <h2> Guitar Repair Inventory Management System </h2>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

// components cannot be at a top level. must be at source level

export default App;