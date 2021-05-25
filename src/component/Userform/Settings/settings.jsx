import React, { useState } from 'react';
import BG4 from '../../../../Image/Background/BackGround4.png';
import Head from './head';
import Sidebar from './sidebar';
import Postform from './forms/postform';
import Update from './forms/update';
import Delete from './forms/delete';

function Settings() {
  const [switcher, setSwitcher] = useState(1);
  return (
    <div
      className="h-screen w-screen pt-10 px-16 overflow-y-auto"
      style={{
        backgroundImage: `url(${BG4})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <Head />
      <div className="h-form flex ">
        <Sidebar setSwitcher={setSwitcher} />
        {switcher === 1 ? <Postform /> : ''}
        {switcher === 2 ? <Update /> : ''}
        {switcher === 3 ? <Delete /> : ''}
      </div>
    </div>
  );
}

export default Settings;
