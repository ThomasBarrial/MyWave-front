/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Form({ question, setQuestion, spots, setSpots, setIsForm }) {
  const [reponse1, setReponse1] = useState('');
  const [reponse2, setReponse2] = useState('');
  const [reponse3, setReponse3] = useState('');

  const rep1 = (e) => {
    setQuestion(question + 1);
    setReponse1(e.target.value);
  };

  useEffect(() => {
    if (reponse1 === 'Sable') {
      setSpots(spots.filter((spt) => spt.break_ID === 0));
    } else {
      setSpots(spots.filter((spt) => spt.break_ID === 1));
    }
  }, [reponse1]);

  const rep2 = (e) => {
    setQuestion(question + 1);
    setReponse2(e.target.value);
  };

  useEffect(() => {
    if (reponse2 === 'Sauvage') {
      setSpots(spots.filter((spt) => spt.acces_ID === 0));
    } else {
      setSpots(spots.filter((spt) => spt.acces_ID === 1));
    }
  }, [reponse2]);

  const rep3 = (e) => {
    setQuestion(question + 1);
    setReponse3(e.target.value);
  };

  useEffect(() => {
    if (reponse3 === 'Débutant') {
      setSpots(spots.filter((spt) => spt.niveaux_ID === 0));
    } else if (reponse3 === 'Intermédaire') {
      setSpots(spots.filter((spt) => spt.niveaux_ID === 1));
    } else {
      setSpots(spots.filter((spt) => spt.niveaux_ID === 2));
    }
  }, [reponse3]);

  const result = () => {
    setIsForm(false);
  };
  return (
    <div className="h-screen w-4/12 bg-white bg-opacity-20 text-white px-12 font-poppins">
      <h1 className="mt-5 font-bold text-4xl">MyWave</h1>
      <h2 className="text-xl mt-10">
        Repondez à ces quelques questions pour nous aidés à trouver le meilleur spot pour vous
      </h2>
      {question === 1 ? (
        <div className="mt-10">
          <p className="border-b border-white pb-2">1. Selectionner le break</p>
          <div className="mt-4">
            <button
              className="border mr-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20"
              onClick={rep1}
              value="Reef">
              Reef
            </button>
            <button
              className="border ml-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
              onClick={rep1}
              value="Sable">
              Sable
            </button>
          </div>
        </div>
      ) : (
        ''
      )}

      {question === 2 ? (
        <div>
          <div className="mt-10 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">1. Selectionner le break</p>
            <p className="border-b border-white w-4/12 text-right">{reponse1}</p>
          </div>
          <p className="mt-5 border-b border-white pb-2">2. Selectionner l'accéssiblité ...</p>
          <button
            className="border mt-4 mr-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            onClick={rep2}
            value="Sauvage">
            Sauvage
          </button>
          <button
            className="border mt-4 ml-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            onClick={rep2}
            value="Facile d'accès">
            Facile d'accès
          </button>
        </div>
      ) : (
        ''
      )}

      {question === 3 ? (
        <div>
          <div className="mt-10 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">1. Selectionner le break</p>
            <p className="border-b border-white w-4/12 text-right">{reponse1}</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">2. Selectionner l'accéssiblité ...</p>
            <p className="border-b border-white w-4/12 text-right">{reponse2}</p>
          </div>
          <p className="mt-5 border-b border-white pb-1">3. Selectionner votre niveau</p>
          <button
            value="Débutant"
            className="border mt-4 mr-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            onClick={rep3}>
            Débutant
          </button>
          <button
            value="Intermédaire"
            className="border mt-4 mx-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            onClick={rep3}>
            Intermédiaire
          </button>
          <button
            value="Confirmer"
            className="border mt-4 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            onClick={rep3}>
            Confirmer
          </button>
        </div>
      ) : (
        ''
      )}
      {question === 4 ? (
        <div>
          <div className="mt-10 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">1. Selectionner le break</p>
            <p className="border-b border-white w-4/12 text-right">{reponse1}</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">2. Selectionner l'accéssiblité ...</p>
            <p className="border-b border-white w-4/12 text-right">{reponse2}</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">3. Selectionner votre niveau</p>
            <p className="border-b border-white w-4/12 text-right">{reponse3}</p>
          </div>
          <button
            className="border mt-6 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            type="button"
            onClick={result}>
            Validé
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Form;

Form.propTypes = {
  setQuestion: PropTypes.func.isRequired,
  question: PropTypes.number.isRequired,
  setIsForm: PropTypes.func.isRequired,
  spots: PropTypes.array,
  setSpots: PropTypes.func,
};
