import React, { useState, useEffect } from 'react';
import BG2 from '../../../Image/Background/BackGround2.png';
import Form from './from';
import Spotlist from './spotlist';
import axios from 'axios';
import Result from './result';

function Userform() {
  const [spots, setSpots] = useState([]);
  const [isForm, setIsForm] = useState(true);

  useEffect(() => {
    const getSpots = async () => {
      const res = await axios.get('http://localhost:3000/api/MyWave', {});
      setSpots(res.data);
    };

    getSpots();
  }, []);
  const [question, setQuestion] = useState(1);
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${BG2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      {isForm ? (
        <div className="flex">
          <Form question={question} setQuestion={setQuestion} spots={spots} setSpots={setSpots} setIsForm={setIsForm} />
          <Spotlist question={question} setQuestion={setQuestion} spots={spots} />
        </div>
      ) : (
        <div className="flex-col">
          <Result spots={spots} />
        </div>
      )}
    </div>
  );
}

export default Userform;
