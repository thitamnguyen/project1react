// src/App.js

import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [input, setInput] = useState('');

  const handleClick = () => {
    alert(`Bạn đã nhập: ${input}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button text="Gửi" onClick={handleClick} />
    </div>
  );
}

export default App;
