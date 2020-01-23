import React, { Component } from 'react';
import './App.css';
import Airtable from './components/Airtable/airtable.js';

function App() {
  const [passwords, setPasswords] = React.useState(null);

  const getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => setPasswords(passwords));
  };

  React.useEffect(() => {
    getPasswords();
  }, []);

  return (
    <div className='App'>
      <Airtable />
      {/* Render the passwords if we have them */}
      {!passwords ? null : passwords.length ? (
        <div>
          <h1>5 Passwords.</h1>
          <ul className='passwords'>
            {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
            {passwords.map((password, index) => (
              <li key={index}>{password}</li>
            ))}
          </ul>
          <p>signposty stuff</p>
          <button className='more' onClick={() => getPasswords()}>
            Get More
          </button>
        </div>
      ) : (
        // Render a helpful message otherwise
        <div>
          <h1>No passwords :(</h1>
          <button className='more' onClick={() => getPasswords()}>
            Try Again?
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
