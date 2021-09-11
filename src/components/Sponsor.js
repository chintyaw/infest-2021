import React from 'react'

const Sponsor = () => {
    return (
        <div style={{ marginBottom: "200px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Sponsored By</h1>
            <div style={{ width: "80%", margin: "auto", background: "#F1F4F8", padding: "16px", borderRadius: "20px" }}>
                <a href="https://miraeasset.co.id/" target="_blank" rel="noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ width: "60%", height: "auto", objectFit: "cover", margin: "auto", marginBottom: "10px" }} src="/mirae-logo.png" alt="/" />
                </a>
                <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                    <img style={{ width: "60%", height: "auto", objectFit: "cover", display: "flex", justifyContent: "center" }} src="/sponsor.svg" alt="/" />
                </div>

                {/* <img style={{ width: "30%", height: "auto", objectFit: "cover", margin: "auto" }} src="/sponsor2.png" alt="/" /> */}
            </div>
        </div>
    )
}

export default Sponsor
