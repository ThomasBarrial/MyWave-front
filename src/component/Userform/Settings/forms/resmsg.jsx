import React from 'react';
import PropTypes from 'prop-types';

function Resmsg({ postOk, deleteOk, updateOk }) {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className="z-50 flex items justify-center h-screen w-sreen">
      <div className="h-60 w-82 bg-white bg-opacity-20 border border-white">
        {postOk ? <h1>Your Spot was successfully upload</h1> : ''}
        {deleteOk ? <h1>Your Spot was successfully upload</h1> : ''}
        {updateOk ? <h1>Your Spot was successfully upload</h1> : ''}
        <button onClick={handleClick} className="border border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
          ok
        </button>
      </div>
    </div>
  );
}

export default Resmsg;

Resmsg.propTypes = {
  postOk: PropTypes.bool.isrequired,
  deleteOk: PropTypes.bool.isrequired,
  updateOk: PropTypes.bool.isrequired,
};
