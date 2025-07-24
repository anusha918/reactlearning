import React, { useState } from 'react';

const CountDisplay = React.memo(({ count }) => {
  console.log('CountDisplay rendered');
  return <h2>Count: {count}</h2>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <CountDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <h1>Text Input</h1>
      <input
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
