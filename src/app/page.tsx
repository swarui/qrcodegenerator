'use client'

import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const downloadQRCode = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const url = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 w-72 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-8">
        {text ? (
          <QRCodeCanvas
            value={text}
            size={256}
            ref={canvasRef}
          />
        ) : (
          <p className="text-gray-500">Enter text to generate QR code</p>
        )}
      </div>

      {text && (
        <button
          onClick={downloadQRCode}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default QrGenerator;
