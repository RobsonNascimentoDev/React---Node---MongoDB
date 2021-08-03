import React from 'react';
import { AiFillDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import  './style.css';
import  './style-priority.css';

function Notes({data}) {
  return (
    <>
      <li className={data.priority ? "notepad-infos-priority": "notepad-infos"}>
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiFillDelete
              size='24'
            />
          </div>
        </div>
        <textarea defaultValue={data.note} />
        <span>
          <AiOutlineExclamationCircle
            size="24"
          />
        </span>
      </li>
    </>
  )
}

export default Notes;