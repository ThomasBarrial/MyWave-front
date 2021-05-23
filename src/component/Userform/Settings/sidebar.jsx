/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ setSwitcher }) {
  const handleClick = () => {
    setSwitcher(1);
  };

  const handleClick2 = () => {
    setSwitcher(2);
  };
  return (
    <div className=" w-3/12 bg-white bg-opacity-20 border-l border-white sticky">
      <div className="text-white font-poppins justify-start w-full text-lg  list-none py-5 px-5 ">
        <h1 className="text-xl font-bold">Selectionnez l'action que vous voulez faire</h1>
        <button
          onClick={handleClick}
          className="border-b text-left w-full mt-8 border-white  py-1 hover:bg-white hover:bg-opacity-20 ">
          Crée un nouveau spot
        </button>
        <button
          onClick={handleClick2}
          className="border-b mt-5 text-left border-white w-full py-1 hover:bg-white hover:bg-opacity-20 ">
          Modifier un spot
        </button>
        <button className="border-b mt-5 text-left w-full border-white py-2 hover:bg-white hover:bg-opacity-20 ">
          Supprimer un spot
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  setSwitcher: PropTypes.array,
};
