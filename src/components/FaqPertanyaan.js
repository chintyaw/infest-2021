const questions = [
  {
    id: 1,
    title: 'Berapa biaya pendaftaran Trading Competition?',
    info: 
        <text style={{lineHeight:'2'}}>
          Pendaftaran Trading Competition dibagi menjadi dua tahap dengan pembagian sebagai berikut: <br/>
          {'\u2B24'} <text style={{fontStyle: 'italic'}}>Early bird</text> (2 Juli 2021 - 11 Juli 2021) : Rp 100.000,00/tim <br/>
          {'\u2B24'} <text style={{fontStyle: 'italic'}}>Normal wave</text> (12 Juli 2021 - 25 Juli 2021) : Rp 150.000,00/tim
        </text>
  },
  {
    id: 2,
    title: 'Bagaimana mendaftar Trading Competition',
    info: <text style={{lineHeight: '2'}}>{'\u2B24'} Mengisi formulir pendaftaran melalui (...)<br/>
                {'\u2B24'} Mendapatkan konfirmasi registrasi maksimal H+1 setelah pembayaran <br/>
                Jam 19.00 <text style={{fontStyle : 'italic'}}>cut off</text> pendaftaran di hari itu    
          </text> 
  },
  {
    id: 3,
    title: 'Apakah bisa melakukan refund setelah melakukan pembayaran?',
    info: 'Pembayaran yang telah dilakukan tidak dapat di-refund dengan alasan apapun kecuali terjadi pembatalan acara dari pihak panitia'
  },
  {
    id: 4,
    title: 'Apakah seluruh peserta Trading Competition akan mendapatkan sertifikat?',
    info:
      'Iya, seluruh peserta akan mendapat sertifikat ',
  },
  {
    id: 5,
    title: 'Platform apa yang digunakan untuk Trading Competition?',
    info:
      'IDX',
  },
  {
    id: 6,
    title: 'Kapan dan di mana sertifikat diberikan?',
    info:
      'Seluruh sertifikat akan dibagikan melalui e-mail ketua tim masing-masing maksimal',
  },
]
export default questions
