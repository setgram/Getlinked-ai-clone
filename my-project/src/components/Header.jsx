import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b shadow-sm static top-0 z-40">
      <header className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img
            src="./src/assets/getlinked.png"
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
        <div className="flex gap-28 items-center ">
          <ul className="text-white flex space-x-6">
            <Link to="/time-line">
              <li>Timeline</li>
            </Link>
            <Link to="overview">
              <li>Overview</li>
            </Link>
            <Link to="faqs">
              <li>FAQs</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
          </ul>
          <Register />
        </div>
      </header>
    </div>
  );
}
