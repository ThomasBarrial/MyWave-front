/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ question, setQuestion }) {
  const [reponse1, setReponse1] = useState('');
  const [reponse2, setReponse2] = useState('');
  const [reponse3, setReponse3] = useState('');
  const [reponse4, setReponse4] = useState('');

  const rep1 = (e) => {
    setQuestion(question + 1);
    setReponse1(e.target.value);
  };
  const rep2 = (e) => {
    setQuestion(question + 1);
    setReponse2(e.target.value);
  };
  const rep3 = (e) => {
    setQuestion(question + 1);
    setReponse3(e.target.value);
  };
  const rep4 = (e) => {
    setQuestion(1);
    setReponse4(e.target.value);
  };
  console.log(question);
  console.log(reponse1);
  console.log(reponse2);
  console.log(reponse3);
  console.log(reponse4);

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
          <div className="mt-8 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">1. Selectionner le break</p>
            <p className="border-b border-white w-4/12 text-right">{reponse1}</p>
          </div>
          <div className="mt-8 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">2. Selectionner l'accéssiblité ...</p>
            <p className="border-b border-white w-4/12 text-right">{reponse2}</p>
          </div>
          <div className="mt-10 flex justify-between">
            <p className="border-b border-white pb-2 w-8/12">3. Selectionner votre niveau</p>
            <p className="border-b border-white w-4/12 text-right">{reponse3}</p>
          </div>
          <p className="mt-8 border-b border-white pb-2">4. Type de vague</p>
          <button
            className="border mt-4 mr-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            value="Smooth"
            onClick={rep4}>
            Smooth
          </button>
          <button
            className="border mt-4 ml-2 border-white px-6 py-1 hover:bg-white hover:bg-opacity-20 "
            value="Tubulaire"
            onClick={rep4}>
            Tubulaire
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
};
