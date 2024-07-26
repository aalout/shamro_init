'use client';

import React from 'react';

export default function RobokassaPay({ src }) {
  return (
    <div>
      <iframe
        width="242"
        height="55"
        style={{
          border: '0',
          width: '242px',
          height: '55px',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
        src={src}
      />
    </div>
  );
}
