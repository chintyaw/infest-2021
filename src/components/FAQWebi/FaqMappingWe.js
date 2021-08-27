import React, { useState } from 'react'
import data from './FAQPerWe'
import SingleQuestion from './FaqExpandWe'
import './FaqStyle.css'

const Webi = () => {
  const [questionsWe] = useState(data)

  return (
    <main>
      <div className='container'>
        <h1 style={{textAlign: 'center', marginBottom :'60px'}}>Frequently Asked Question</h1>
        <section className='info'>
          {questionsWe.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Webi
