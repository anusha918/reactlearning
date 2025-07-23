import React, { useState } from 'react';

function App() {
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Gender: ${gender}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === 'Male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === 'Female'}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
