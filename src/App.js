import Select from 'react-select'
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  /* variabel sementara */
  const [ datas, setDatas ] = useState([])
  
  /* function mengambil data api nya */
  const getBerrys = async () => {
    const berrys = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berrys.json()
    /* manipulasi data api supaya sama dengan select react nya */
    let result = value.results.map(data => {
      return {
        label: data.name,
        value: data.label
      }
    })
    /* Membuat supaya menjadi urutan ascending */
    result = result.sort((a,b) => a.label.localeCompare(b.label))
    /* memasukan hasil ke variabel sementara / useState */
    setDatas(result)
  }
  
  
  /* ketika pertama kali di reander */
  useEffect(() => {
    /* jalankan function getBerrys */
    getBerrys()
  }, [])
  return (
    <div className="content">
      <Select options={datas} />
    </div>
  );
}

export default App;
