import React from 'react';
import './Compe.css';

const CompeAbout = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "173px", marginBottom:"40px", textShadow: "-6px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            Tentang Competition
            </h1>
            <div className="AboutContainer">
                <p className="Paragraph">
                Trading Competition merupakan kompetisi trading berkeloompok 1-3 orang yang terdiri dari Preliminary Stage dan Final Stage. 
                Selama kompetisi berlangsung, peserta akan diminta untuk memaksimalkan keuntungan dari modal uang virtual sebesar Rp120.000.000,00 
                selama X minggu. Pada akhirnya, hasil yang didapat akan ditampilkan dalam bentuk history trading dan presentasi virtual.
                </p>
            </div>
        </div>
    )
}

export default CompeAbout