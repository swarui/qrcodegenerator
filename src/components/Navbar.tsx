import type React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          <span className="text-white font-medium text-sm">
            QR Code Generator
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
