import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Resmsg from './resmsg';

function Delete() {
  const [spot, setSpot] = useState([]);
  const [spotId, setSpotId] = useState(1);
  const [deleteOk, setDeleteOk] = useState(false);
  const handleSelect = (e) => {
    setSpotId(parseInt(e.target.value));
  };

  const id = spotId;

  useEffect(() => {
    const getDatas = async () => {
      const res = await axios.get(`http://localhost:3000/api/MyWave`);
      setSpot(res.data);
    };
    getDatas();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios
      .delete(`http://localhost:3000/api/MyWave/${id}`)
      .then(() => {
        setDeleteOk(2);
        return <Resmsg deleteOk={deleteOk} />;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-10/12 w-9/12 pb-20 px-8 text-white font-poppins overflow-y-auto">
      <h1 className="text-2xl font-bold mt-6">Supprimer un Spot</h1>
      <form className="flex flex-col mt-8" action="">
        <label className=" font-bold text-xl" htmlFor="text">
          Séléctioner le spot a Supprimer
        </label>
        <select className="mt-1 w-full border border-white bg-white bg-opacity-20 p-2" name="spot" id="">
          {spot.map((spt, id) => {
            return (
              <option onClick={handleSelect} className="bg-white text-black  bg-opacity-20" key={id} value={spt.id}>
                {spt.name}
              </option>
            );
          })}
        </select>
        <button
          onClick={handleDelete}
          className="border mt-5 w-3/12 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
          Delete
        </button>
      </form>
    </div>
  );
}

export default Delete;
