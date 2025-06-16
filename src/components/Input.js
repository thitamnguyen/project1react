import React from 'react';

function Input({ value, onChange, placeholder = "Nhập gì đó đi haha" }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '250px',
      }}
    />
  );
}

export default Input;
