import React, { useState } from 'react'
import data from './FAQPerWO'
import SingleQuestion from './FaqExpandWo'
import './FaqStyle.css'

const HomeWork = () => {
  const [workshopF] = useState(data)

  return (
    <main>
      <div className='container'>
        <section className='info'>
          {workshopF.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default HomeWork
