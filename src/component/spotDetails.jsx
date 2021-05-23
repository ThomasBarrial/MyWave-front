import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BG3 from '../../Image/Background/BackGround3.png';

function SpotDetails() {
  const [spot, setSpot] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/api/MyWave/${id}`);
      setSpot(res.data);
    };
    getData();
  }, [id]);

  const handleClick = () => {
    window.open(spot[0].webcam);
  };

  const handleClick2 = () => {
    window.open(spot[0].condition);
  };
  return (
    <div
      className="h-screen w-screen pt-8 px-20"
      style={{
        backgroundImage: `url(${BG3})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <h1 className="pb-10 text-white font-bold font-poopins text-4xl">WAVES</h1>
      {spot.map((spt, key) => {
        return (
          <div className="flex h-10/12 border-t pt-12 border-white" key={key}>
            <div className="w-7/12 mr-20">
              <p className="font-poppins text-2xl text-white">{spt.lieu}</p>
              <h1 className="text-white font-bold font-poopins text-7xl">{spt.name}</h1>
              <p className="mt-5 font-poppins text-base text-white">{spt.description}</p>
              <div className="mt-8">
                <button
                  className="border mt-4 mr-2 border-white px-6 py-1  text-white font-poppins hover:bg-white hover:bg-opacity-20 "
                  onClick={handleClick}>
                  Webcam
                </button>
                <button
                  className="border mt-4 mr-2 border-white px-6 py-1 text-white font-poppins hover:bg-white hover:bg-opacity-20 "
                  onClick={handleClick2}>
                  Condition Surf
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${spt.photo})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
              }}
              className="w-5/12 border border-white"></div>
          </div>
        );
      })}
    </div>
  );
}

export default SpotDetails;
