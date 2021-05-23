/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Result({ spots }) {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="h-40 flex flex-col justify-between border-b border-white pb-5 sticky">
        <h1 className="mt-5 ml-5 text-white font-bold font-poopins text-4xl">Waves</h1>
        <h2 className="text-white ml-10 font-poppins text-xl">Notre meilleur selection de spots pour vous... </h2>
      </div>
      <div className="h-8/12 w-full mb-20">
        {spots.map((spot, id) => {
          return (
            <div className="flex h-64 mt-5 w-full px-10 py-5" key={id}>
              <Link to={`/spot/${spot.id}`}>
                <div
                  className="h-60 w-96 border border-white"
                  style={{
                    backgroundImage: `url(${spot.photo})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`,
                  }}></div>
              </Link>
              <div className=" h-60 flex flex-col justify-between ml-10 w-7/12">
                <div className="flex flex-col">
                  <h2 className="font-poppins text-xl text-white">{spot.lieu}</h2>
                  <h1 className="font-poppins text-5xl font-bold text-white">{spot.name}</h1>
                  <p className="mt-2 h-16 font-poppins text-xs text-white overflow-hidden">{spot.description}</p>
                </div>
                <Link to={`/spot/${spot.id}`}>
                  {' '}
                  <button className="font-poppins text-lg text-white">Plus d'info...</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;

Result.propTypes = {
  spots: PropTypes.array,
};
