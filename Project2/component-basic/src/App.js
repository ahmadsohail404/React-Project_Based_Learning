import logo from './logo.svg';
import './App.css';

function App() {

  const myName = "Sohail";
  function sayHello(user) {
    return "Hello " + user;
  }
  return (
    <div className="App">
      <h2>Just some sample data: {sayHello("Sohail")}</h2>
      <h2>Just some sample data 2: {myName}</h2>
    </div>
  );
}


export default App;


