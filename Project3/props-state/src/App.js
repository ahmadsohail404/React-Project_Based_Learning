import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>Prop string is :{props.propString} </h3>
        <h3>Prop number is :{props.propNumber} </h3>
        <h3>Prop object is :{props.propObject.obj1} </h3>
        <Parent />
      </header>
    </div>
  );
}

// Types of props
App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number,
}
// it has function, boolean and array as well

App.defaultProps = {
  propNumber: 3,
  propString: "default string",
  propObject: {
    obj1: "obj1",
    obj2: "obj2",
    obj3: "obj3",
  }
}




function Parent(props) {

  constructor(props) {
    super(props)

    this.state = {
      cars: ["BMW", "Audi", "Mercedes"]
    };
  }

  return (
    <div>
      <h2>Just some info</h2>
      <Cars msg="cars are cool" model="4242" coolCars={props.cars} />
      {/*here, msg is stored in kind of globle variable (or object)
      called props */}
    </div>
  );
}

Parent.defaultProps = {
  cars: ["BMW", "Audi", "Mercedes"]
}



function Cars(props) {
  return (
    <div>
      <h3>I am from Cars component</h3>
      <p>{props.msg}</p>
      <p>{props.model}</p>
      <div>{props.coolCars.map((item, i) => {
        return <p key={i} >{item}</p>;
      })}</div>
    </div>
  );
}



export default App;
