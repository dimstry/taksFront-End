import Select from 'react-select'
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [ datas, setDatas ] = useState([])
  
  const getBerrys = async () => {
    const berrys = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berrys.json()
    const result = value.results.map(data => {
      return {
        label: data.name,
        value: data.label
      }
    })
    setDatas(result)
  }
  
  useEffect(() => {
    getBerrys()
  }, [])
  return (
    <div className="content">
      <Select options={datas} />
    </div>
  );
}

export default App;
