import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  const element = (
    <div>
      <h1>The time is:-</h1>
      <h2>Time: {new Date().toLocaleTimeString()} </h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(App, 1000);

export default App;
