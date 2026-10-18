import { useState } from 'react'

const Contador = () => {

    //TODO usar useState
    const [contador, setContador] = useState(0)

    //TODO crear una funcion para incrementar
    const handleDrecrement = () => {
        setContador(contador - 1)
    }

    //TODO crear una funcion para incrementar
    const handleIncrement = () => {
        setContador(contador + 1)
    }

    //TODO crear una funcion para incrementar
    const handleReset = () => {
        setContador(0)
    }

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif',  }}>
      <h2>Contador iteractivo</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold',  }} >{contador}</p>
      <div style={{ display:'flex', gap: '10px', justifyContent: 'center'}}>
        <button onClick={handleDrecrement} style={btnStyle}>- Restar</button>
        <button onClick={handleIncrement} style={btnStyle}>+ Sumar</button>
        <button onClick={handleReset} style={btnStyle}>Reset</button>
      </div>
    </div>
  )
}

export default Contador


const btnStyle = {
    padding: '10px 20px',
     backgroundColor: 'blue', 
     color: 'white', 
     border: 'none', 
     borderRadius: '5px', 
     cursor: 'pointer'
}