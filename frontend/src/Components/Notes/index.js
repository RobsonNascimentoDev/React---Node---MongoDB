import React, { useState } from 'react';
import { AiFillDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './style.css';
import './style-priority.css';
import api from '../../Service/api';

function Notes({ data, handleDelete, handleChangePriority }) {
  const [changedNote, setChangedNote] = useState('')

  function handleEdit(e, priority) {
    e.style.cursor = 'text';
    e.style.borderRadius = '5px';

    e.style.boxShadow = priority ? '0 0 5px white' : '0 0 5px gray'
  }

  async function handleSave(e, note) {
    e.style.cursor = 'default';
    e.style.boxShadow = 'none';

    if (changedNote && changedNote !== note) {
      await api.post(`/content/${data._id}`, {
        note: changedNote,
      })
    }
  }


  return (
    <>
      <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiFillDelete
              onClick={() => handleDelete(data._id)}
              size='24'
            />
          </div>
        </div>
        <textarea
          defaultValue={data.note}
          onClick={e => handleEdit(e.target, data.priority)}
          onChange={e => setChangedNote(e.target.value)}
          onBlur={e => handleSave(e.target, data.note)}
        />
        <span>
          <AiOutlineExclamationCircle
            onClick={() => handleChangePriority(data._id)}
            size="24"
          />
        </span>
      </li>
    </>
  )
}

export default Notes;