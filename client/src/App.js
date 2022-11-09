import './App.css';
const backend = require('@code-as-service/server')

function App() {
  backend();
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
