import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css';
import './main.css';

import Notes from "./Components/Notes";
import RadioButtons from "./Components/RadioButton";

import api from './Service/api';

function App() {

  const [title, setTitle] = useState('');
  const [note, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get('/annotations',)
      setAllNotes(response.data);


    }
    getAllNotes();
  }, [])

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#FFD3CA';
      if (title && note) {
        btn.style.background = '#EB8F7A';
      }
    }
    enableSubmitButton()
  }, [title, note])


  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      note,
      priority: false,
    })

    setTitle('');
    setNotes('');

    setAllNotes([...allNotes, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title"> Tiutlo da Anotação </label>
            <input
              required
              maxLength="30"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota"> Anotações </label>
            <textarea
              required
              value={note}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          <button id="btn_submit" type="submit">Salvar</button>

        </form>

        <RadioButtons />
      </aside>


      <main>
        <ul>
          {
            allNotes.map(data => (
              <Notes data={data} />
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default App;
