import React, { useState } from 'react'
import data from './FaqPertanyaan'
import SingleQuestion from './FaqExpand'
import './FaqStyle.css'

const AAA = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h1 style={{textAlign: 'center', fontSize : '40px', marginBottom :'40px'}}>FAQ</h1>
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
