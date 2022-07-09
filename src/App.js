import Select from 'react-select'
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  /* variabel sementara */
  const [ datas, setDatas ] = useState([])
  const [ userSelect, setUserSelect ] = useState("")
  const [ isShow, setIsShow ] = useState(false)
  
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
  
  const handleSubmit = () => {
    setIsShow(true)
  }
  const handleChange = (value) => {
    setUserSelect(value)
  }
  return (
    <div className="content">
      <h1>{isShow ? userSelect : "" }</h1>
      <button onClick={() => handleSubmit() }> Show value</button>
      <br />
      <br />
      <Select options={datas} onChange={(e) => handleChange(e.value)} />
    </div>
  );
}

export default App;
