import { useState } from 'react';
import './App.css';


function App() {

  const [dataCoso1, setDataCoso1] = useState([]);
  const [message, setMessage] = useState('');
  
  const forzarEscalamiento = () => {
    //Aca metes tu url para hacer fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setDataCoso1(JSON.stringify(json)));

  }

  const realizarRequest = () => {
    fetch('http://192.168.1.3:4000/evaluatepython', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({code:message})
    }).then(response => response.json())
      .then(json => setDataCoso1(json.result));
  }

  const forzarCaidaNodo = () => {


  }

  const NewlineText = (props) => {
    const text = props.text.length === 0 ? '' : props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
  }

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };
  
  return (
    <div className="App">
      <h2>Python Text</h2>
      <textarea id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        rows={15}
        cols={80}></textarea>
      <br/>
      <button className='boton' onClick={forzarEscalamiento}>Forzar Escalamiento</button>
      <button className='boton' onClick={forzarCaidaNodo}>Forzar Caida de Nodo</button>
      <button className='boton' onClick={realizarRequest}>Realizar Request</button>
      <h2>Respuesta</h2>
      <NewlineText text={dataCoso1}/>
      
    </div>
  );
}


export default App;
