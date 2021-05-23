import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <div>
      {' '}
      <div className="h-28 flex flex-col justify-between border-b border-white pb-3">
        <h1 className=" font-poppins text-white font-bold text-4xl">WAVES</h1>
        <div className=" flex flex-row items-end">
          <nav className="text-white font-poppins justify-start w-full text-lg flex text-start text-right list-none">
            <li className="ml-2">Home</li>
            <li className="ml-10">AllSpots</li>
            <Link to="/settings">
              <li className="ml-10">Settings</li>
            </Link>
          </nav>
          <h1 className=" font-poppins text-white font-bold text-2xl">Settings</h1>
        </div>
      </div>
    </div>
  );
}

export default Head;
