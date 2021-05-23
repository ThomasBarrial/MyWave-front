import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="h-36 text-white font-poppins flex flex-col justify-between items-start pt-5 pb-2 px-20 border-b border-white">
      <h1 className="font-bold text-4xl">MyWave</h1>

      <nav className="justify-end w-full text-lg flex text-end text-right list-none">
        <li className="ml-2">Home</li>
        <li className="ml-10">AllSpots</li>
        <Link to="/settings">
          <li className="ml-10">Settings</li>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
