/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Spotlist() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const getSpots = async () => {
      const res = await axios.get('http://localhost:3000/api/MyWave', {});
      setSpots(res.data);
    };

    getSpots();
  }, []);

  console.log(spots);
  return (
    <div className="w-8/12">
      <div className="h-screen w-full overflow-y-auto">
        {spots.map((spot, id) => {
          return (
            <div className="flex h-68  w-full px-10 py-5" key={id}>
              <div
                className="h-52 w-5/12 border border-white"
                style={{
                  backgroundImage: `url(${spot.photo})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                }}></div>
              <div className="flex flex-col justify-between ml-5 w-7/12">
                <div className="flex flex-col">
                  <h2 className="font-poppins text-xl text-white">{spot.lieu}</h2>
                  <h1 className="font-poppins text-5xl font-bold text-white">{spot.name}</h1>
                  <p className="mt-2 h-16 font-poppins text-xs text-white overflow-hidden">{spot.description}</p>
                </div>
                <p className="font-poppins text-lg text-white">Plus d'info...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spotlist;
