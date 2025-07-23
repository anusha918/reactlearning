import React from 'react';

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
