import React from 'react'

const Teaser = () => {
    return (
        <div className="video-responsive" style={{ display: "flex", justifyContent: "center", paddingTop: "90px", marginBottom: "180px" }}>
            <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/N1sMU-rIyMI"
                title="Teaser INFEST 2021"
                frameborder="0"
                allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default Teaser
