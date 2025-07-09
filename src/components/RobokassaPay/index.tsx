'use client';

import React from 'react';

export default function RobokassaPay({ src }: { src: string }) {
  return (
    <div>
      <iframe
        width="auto"
        height="auto"
        style={{
          border: '0',
          width: 'auto',
          height: 'auto',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
        src={src}
      />
    </div>
  );
}
