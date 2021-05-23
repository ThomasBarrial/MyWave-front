/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Spotlist({ spots }) {
  return (
    <div className="w-8/12">
      <div className="h-screen w-full overflow-y-auto">
        {spots.map((spot, id) => {
          return (
            <div className="flex h-68  w-full px-10 py-5" key={id}>
              <Link to={`/spot/${spot.id}`}>
                <div
                  className="h-52 w-72 border border-white"
                  style={{
                    backgroundImage: `url(${spot.photo})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`,
                  }}></div>
              </Link>
              <div className="flex flex-col justify-between ml-5 w-7/12">
                <div className="flex flex-col">
                  <h2 className="font-poppins text-xl text-white">{spot.lieu}</h2>
                  <h1 className="font-poppins text-5xl font-bold text-white">{spot.name}</h1>
                  <p className="mt-2 h-16 font-poppins text-xs text-white overflow-hidden">{spot.description}</p>
                </div>
                <Link to={`/spot/${spot.id}`}>
                  <p className="font-poppins text-lg text-white">Plus d'info...</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spotlist;

Spotlist.propTypes = {
  spots: PropTypes.array,
};
