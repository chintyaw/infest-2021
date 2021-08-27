import React, { useState } from 'react'
import data from './FAQPerWe'
import SingleQuestion from './FaqExpandWe'
import './FaqStyle.css'

const HomeWebi = () => {
  const [questionsWe] = useState(data)

  return (
    <main>
      <div className='container'>
        <section className='info'>
          {questionsWe.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default HomeWebi
