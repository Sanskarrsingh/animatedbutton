import React from 'react';
import AnimatedButton from './AnimatedButton';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <AnimatedButton text="Click Me!" onClick={handleClick} />
    </div>
  );
}

export default App;
