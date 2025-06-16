import React from 'react';

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px',
      }}
    >
      {text}
    </button>
  );
}

export default Button;
