import React from 'react'

const Sponsor = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "62px"}}>Sponsored By</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                <img style={{ marginBottom: "200px", width: "50%", height: "auto", objectFit: "cover" }} src="/sponsor.svg" alt="/" />
            </div>
        </div>
    )
}

export default Sponsor
