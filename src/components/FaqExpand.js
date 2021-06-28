import React, { useState } from 'react'
import {FiPlus,FiMinus} from "react-icons/fi"
import './FaqStyle.css'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={expanded? 'questionOpened':'question'}>
      <header>
        <h1 style={{ textShadow: "none"}} onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h1>
        <button className={expanded? 'btnOpened':'btn'} onClick={() => setExpanded(!expanded)}>
          {expanded ? <FiMinus /> : <FiPlus />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default Question
