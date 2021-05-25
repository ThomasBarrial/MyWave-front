/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useState } from 'react';
import Resmsg from './resmsg';

function Postform() {
  const [question, setQuestion] = useState(1);
  const [spotName, setSpotName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [Webcam, setWebcam] = useState('');
  const [lieu, setLieu] = useState('');
  const [Condition, setCondition] = useState('');
  const [niveauxId, setNiveauxId] = useState('');
  const [breakId, setBreakId] = useState('');
  const [accesId, setAccesId] = useState('');
  const [postOk, setPostOk] = useState(false);
  const handleClick = (e) => {
    setQuestion(2);
    setNiveauxId(parseInt(e.target.value), 10);
  };
  const handleClick2 = (e) => {
    setQuestion(3);
    setBreakId(parseInt(e.target.value), 10);
  };
  const handleClick3 = (e) => {
    setQuestion(1);
    setAccesId(parseInt(e.target.value), 10);
  };

  const data = {
    name: spotName,
    photo: photo,
    description: description,
    webcam: Webcam,
    condition: Condition,
    niveaux_ID: niveauxId,
    break_ID: breakId,
    lieu: lieu,
    acces_ID: accesId,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/api/MyWave`, data)
      .then(() => {
        setPostOk(true);
        return <Resmsg posOk={postOk} />;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-10/12 w-9/12 pb-20 px-8 text-white font-poppins overflow-y-auto">
      <h1 className="text-2xl font-bold mt-6">Crée un nouveau Spot</h1>
      <form className="flex flex-col mt-8" action="">
        <label htmlFor="text">Noms du spot</label>
        <input
          onChange={(e) => setSpotName(e.target.value)}
          className="mt-1 bg-white bg-opacity-20 h-10 border border-white px-3"
          type="text"
        />
        <label className="mt-5" htmlFor="text">
          photo
        </label>
        <input
          onChange={(e) => setPhoto(e.target.value)}
          className="mt-1 bg-white bg-opacity-20 h-10 border border-white px-3"
          type="text"
        />
        <label className="mt-5" htmlFor="text">
          Webcam
        </label>
        <input
          onChange={(e) => setWebcam(e.target.value)}
          className="mt-2 bg-white bg-opacity-20 h-10 border border-white px-3"
          type="text"
        />
        <label className="mt-5" htmlFor="text">
          Condition
        </label>
        <input
          onChange={(e) => setCondition(e.target.value)}
          className="mt-2 bg-white bg-opacity-20 h-10 border border-white px-3"
          type="text"
        />
        <label className="mt-5" htmlFor="text">
          Lieu
        </label>
        <input
          onChange={(e) => setLieu(e.target.value)}
          className="mt-2 bg-white bg-opacity-20 h-10 border border-white px-3"
          type="text"
        />
        {question === 1 ? (
          <div className="mt-5">
            <h3 className="mb-2">Sélectionner le niveau</h3>
            <button
              value={0}
              onClick={handleClick}
              className="border border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              débutant
            </button>
            <button
              value={1}
              onClick={handleClick}
              className="border ml-4 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              Intermédiaire
            </button>
            <button
              value={2}
              onClick={handleClick}
              className="border ml-4 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              Confirmer
            </button>
          </div>
        ) : (
          ''
        )}
        {question === 2 ? (
          <div className="mt-5">
            <h3 className="mb-2">Sélectionner le Break</h3>
            <button
              value={0}
              onClick={handleClick2}
              className="border  border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              Sable
            </button>
            <button
              value={1}
              onClick={handleClick2}
              className="border ml-4 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              Reef
            </button>
          </div>
        ) : (
          ''
        )}
        {question === 3 ? (
          <div className="mt-5">
            <h3 className="mb-2">Sélectionner l'accessibilité'</h3>
            <button
              value={0}
              onClick={handleClick3}
              className="border border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              facile d'accès
            </button>
            <button
              value={1}
              onClick={handleClick3}
              className="border ml-4 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
              Sauvage
            </button>
          </div>
        ) : (
          ''
        )}
        <label className="mt-5" htmlFor="text">
          Description
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 h-20 bg-white bg-opacity-20 border border-white py-2 px-3"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="border mt-5 w-3/12 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 ">
          Validé
        </button>
      </form>
    </div>
  );
}

export default Postform;
