import React from 'react';
import BG1 from '../../Image/Background/BackGround1.png';
import { Link } from 'react-router-dom';
import Head from '../component/Userform/Settings/head';

function Acceuil() {
  return (
    <div
      className="h-screen pt-10 px-16"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <Head />
      <div className="mt-20">
        <h1 className="text-8xl font-poppins font-bold text-white">Southwest France Surfspots</h1>
        <Link to="/findYourPerfectWave">
          <button className="border mt-32 w-3/12 px-5 border-white py-1 text-white font-poppins hover:bg-white hover:bg-opacity-20 ">
            Search For your Perfect Wave
          </button>{' '}
        </Link>
      </div>
    </div>
  );
}

export default Acceuil;
