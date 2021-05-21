import React from 'react';

function Header() {
  return (
    <div className="text-white font-poppins flex justify-between items-center py-6 px-10">
      <h1 className="font-bold text-4xl">MyWave</h1>
      <nav className="w-3/12 text-lg font-bold flex justify-around list-none">
        <li>Home</li>
        <li>AllSpots</li>
        <li>Add</li>
      </nav>
    </div>
  );
}

export default Header;
