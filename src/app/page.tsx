"use client";

import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrGenerator: React.FC = () => {
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const downloadQRCode = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div 
      style={{ fontFamily: "Outfit" }}
      className="flex flex-col items-center mt-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl flex justify-center  sm:text-3xl font-bold mb-6 text-center">
        QR Code Generator
      </h1>

      <input
  type="text"
  placeholder="Enter URL to generate QR Code"
  value={text}
  onChange={(e) => setText(e.target.value)}
  className="p-2 w-72 max-w-full text-base sm:text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
/>


      <div className="mt-8 ">
        {text ? (
          <QRCodeCanvas
            value={text}
            size={Math.min(window.innerWidth * 0.7, 256)} // limit size based on screen width
            ref={canvasRef}
            className="flex mx-auto border-4 border-white"
          />
        ) : (
          <p className="text-gray-500 text-center">
            {/* Enter text to generate QR code */}
          </p>
        )}
      </div>

      {text && (
        <button
          onClick={downloadQRCode}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default QrGenerator;
