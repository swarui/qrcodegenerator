"use client";

import type React from "react";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      <main className="flex-grow px-4 py-12">
        <div className="max-w-md mx-auto pt-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <label
                htmlFor="qr-input"
                className="block text-sm font-medium text-gray-200 mb-3"></label>
              <input
                id="qr-input"
                type="text"
                placeholder="https://example.com or any text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-3 text-base bg-white/20 border-2 border-white/30 text-white 
             placeholder:text-gray-300 placeholder:opacity-70 
             rounded-xl focus:outline-none focus:border-white/50 focus:ring-4 focus:ring-white/20 
             transition-all duration-200"
              />
            </div>

            <div className="flex flex-col items-center mb-8">
              {text ? (
                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-white/20">
                  <QRCodeCanvas
                    value={text}
                    size={200}
                    ref={canvasRef}
                    className="block"
                    bgColor="#ffffff"
                    fgColor="#1f2937"
                  />
                </div>
              ) : (
                <div className="w-[212px] h-[212px] bg-white/5 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">
                      QR code will appear here
                    </p>
                  </div>
                </div>
              )}
            </div>

            {text && (
            <button
  onClick={downloadQRCode}
  className="mt-4 px-4 py-2 
             bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
             text-white rounded transition mx-auto block
             hover:from-gray-800 hover:via-gray-700 hover:to-gray-800">
  Download QR Code
</button>

            )}
          </div>

          <div className="text-center mt-2">
            <p className="text-gray-400 text-sm">
              Your QR code is generated locally and never stored on our servers
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QrGenerator;
