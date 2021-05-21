import React, { useState } from 'react';
import BG2 from '../../../Image/Background/BackGround2.png';
import Form from './from';
import Spotlist from './spotlist';

function Userform() {
  const [question, setQuestion] = useState(1);
  return (
    <div
      className="h-screen w-screen "
      style={{
        backgroundImage: `url(${BG2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <div className="flex">
        <Form question={question} setQuestion={setQuestion} />
        <Spotlist question={question} setQuestion={setQuestion} />
      </div>
    </div>
  );
}

export default Userform;
