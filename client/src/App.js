import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [serverData, setServerData] = useState([{}]);
  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setServerData(data);
        console.log(data);
      }
    )
  }, []);

  return (
    <div className="App">
      {(typeof serverData.users === 'undefined') ? (
        <p>Cargando...</p>
      ) : (
        serverData.users.map((user, i) => {
          return <p key={i}>{user}</p>
        })
      )
    }
    </div>
  );
}

export default App;
