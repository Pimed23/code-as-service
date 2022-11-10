import { useState } from 'react';
import './App.css';

function App() {

  const [dataCoso1, setDataCoso1] = useState([]);

  const forzarEscalamiento = () => {
    //Aca metes tu url para hacer fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setDataCoso1(JSON.stringify(json)));

  }

  const realizarRequest = () => {

  }

  const forzarCaidaNodo = () => {


  }

  return (
    <div className="App">
      <h2>Python Text</h2>
      <textarea className='editor' rows={15} cols={80}></textarea>
      <br/>
      <button className='boton' onClick={forzarEscalamiento}>Forzar Escalamiento</button>
      <button className='boton' onClick={forzarCaidaNodo}>Forzar Caida de Nodo</button>
      <button className='boton' onClick={realizarRequest}>Realizar Request</button>
      <h2>Respuesta</h2>
      {dataCoso1}
    </div>
  );
}

export default App;
