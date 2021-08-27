import React, { useState } from 'react'
import data from './FaqPertanyaan.js'
import SingleQuestion from './FaqExpand'
import './FaqStyle.css'

const HomeAAA = () => {
  const [questions] = useState(data)

  return (
    <main>
      <div className='container'>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default HomeAAA
