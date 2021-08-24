import React from 'react'

const Sponsor = () => {
    return (
        <div style={{ marginBottom: "200px"}}>
            <h1 style={{textAlign: "center", marginBottom: "0px"}}>Sponsored By</h1>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <a href="https://miraeasset.co.id/" target="_blank" rel="noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ width: "60%", height: "auto", objectFit: "cover", margin: "auto", marginBottom: "50px"  }} src="/mirae-logo.png" alt="/" />
                </a>
                <img style={{ width: "60%", height: "auto", objectFit: "cover", margin: "auto" }} src="/sponsor.svg" alt="/" />
            </div>
        </div>
    )
}

export default Sponsor
