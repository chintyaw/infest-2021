import React, { useState } from 'react'
import data from './FAQPerWO'
import SingleQuestion from './FaqExpandWo'
import './FaqStyle.css'

const Work = () => {
  const [workshopF] = useState(data)

  return (
    <main>
      <div className='container'>
        <h1 style={{textAlign: 'center', marginBottom :'60px'}}>Frequently Asked Question</h1>
        <section className='info'>
          {workshopF.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Work
