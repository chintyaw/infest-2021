import React from 'react'
import '../../App.css'
import JotformEmbed from 'react-jotform-embed';
import './RegistCompetition.css'

const RegistCompetition = () => {
    return (
        <div style={{paddingTop: "120px"}}>
           <JotformEmbed src="https://form.jotform.com/211705719791057" />
        </div>
    )
}

export default RegistCompetition
