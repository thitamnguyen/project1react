import React from 'react';

function Button({ text,input }) {
  const handleClick = () => {
    alert(`Bạn đã nhập: ${input}`);
  };
  return (
    <button
     onClick={handleClick}
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
