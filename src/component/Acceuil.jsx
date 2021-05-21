import React from 'react';
import BG1 from '../../Image/Background/BackGround1.png';
import Header from './header';
import { Link } from 'react-router-dom';

function Acceuil() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <Header />
      <div className="py-24 px-40 ">
        <h1 className="text-8xl font-poppins font-bold text-white">Southwest France Surfspots</h1>
        <Link to="/findYourPerfectWave">
          <h2 className="mt-28 text-2xl font-poppins  text-white">Search For your Perfect Wave</h2>{' '}
        </Link>
      </div>
    </div>
  );
}

export default Acceuil;
