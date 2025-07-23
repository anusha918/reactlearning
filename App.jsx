import React, { useState } from 'react';

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(accepted ? 'Terms accepted.' : 'Please accept terms.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
        />
        Accept Terms & Conditions
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
