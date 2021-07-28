import React from "react";
import './App.css';
import './global.css';
import './main.css';

import Notes from "./Components/Notes";



function App() {
  return(
    <div id= "app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          
          <div className="input-block">
            <label htmlFor="title"> Tiutlo da Anotação </label>
            <input />
          </div>

          
          <div className="input-block">
            <label htmlFor="nota"> Anotações </label>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      
      <main>
        <ul>
         <Notes />
        </ul>
      </main>
    </div>
  )
}

export default App;
