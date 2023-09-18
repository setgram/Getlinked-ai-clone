import React from "react";
import Register from "./Register";
export default function Header() {
  return (
    <div className="border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <img src="./src/assets/getlinked.png" alt="logo" />
        <ul className="text-white flex space-x-6">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <Register />
      </header>
    </div>
  );
}
