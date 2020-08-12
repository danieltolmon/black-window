import React from 'react';

export default function VideoTitle({ children }) {
  return (
    <h2
      style={{
        margin: '20px',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        marginTop: '100px',
      }}
    >
      {children}
    </h2>
  );
}
