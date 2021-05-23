import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Update() {
  const [spot, setSpot] = useState([]);
  const [form, setForm] = useState('');
  const [spotName, setSpotName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [Webcam, setWebcam] = useState('');
  const [lieu, setLieu] = useState('');
  const [Condition, setCondition] = useState('');
  const [niveauxId, setNiveauxId] = useState('');
  const [breakId, setBreakId] = useState('');
  const [accesId, setAccesId] = useState('');

  const data = ['name', 'photo', 'description', 'webcam', 'condition', 'niveaux', 'break', 'lieu', 'accès'];

  useEffect(() => {
    const getDatas = async () => {
      const res = await axios.get('http://localhost:3000/api/MyWave');
      setSpot(res.data);
    };
    getDatas();
  }, []);

  const handleChange = (e) => {
    setForm(e.target.value);
  };
  console.log(form);

  return (
    <div className="h-10/12 w-9/12 pb-20 px-8 text-white font-poppins overflow-y-auto">
      <h1 className="text-2xl font-bold mt-6">Modifier un Spot</h1>
      <form className="flex flex-col mt-8" action="">
        <label htmlFor="text">Séléctioner le spot a modifier</label>
        <select className="mt-1 w-full border border-white bg-white bg-opacity-20 p-2" name="spot" id="">
          {spot.map((spt, id) => {
            return (
              <option className="bg-white text-black  bg-opacity-20" key={id} value={spt.id}>
                {spt.name}
              </option>
            );
          })}
        </select>
        <h1 className="mt-5 ">Sélectionnez les donées a modifier</h1>
        <div className="flex h-40 flex-col flex-wrap">
          {data.map((dt, key) => {
            return (
              <div className=" mt-2" key={key}>
                <input
                  className="mr-2 border border-white bg-black"
                  type="checkbox"
                  value={dt}
                  onChange={handleChange}
                />
                <label htmlFor="text">{dt}</label>
              </div>
            );
          })}
        </div>
        {form === 'name' ? (
          <div>
            <label htmlFor="text">Noms du spot</label>
            <input
              onChange={(e) => setSpotName(e.target.value)}
              className="mt-1 bg-white bg-opacity-20 h-10 border border-white px-3"
              type="text"
            />{' '}
          </div>
        ) : (
          ''
        )}
        {form === 'photo' ? (
          <div>
            <label className="mt-5" htmlFor="text">
              photo
            </label>
            <input
              onChange={(e) => setPhoto(e.target.value)}
              className="mt-1 bg-white bg-opacity-20 h-10 border border-white px-3"
              type="text"
            />{' '}
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
}

export default Update;
