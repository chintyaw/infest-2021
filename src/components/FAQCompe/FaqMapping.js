import React, { useState } from 'react'
import data from './FaqPertanyaan.js'
import SingleQuestion from './FaqExpand'
import './FaqStyle.css'

const AAA = () => {
  const [questions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h1 style={{textAlign: 'center', marginBottom :'60px'}}>Frequently Asked Question</h1>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default AAA
