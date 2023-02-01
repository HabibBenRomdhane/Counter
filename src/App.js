
import './App.css';
import { useState, useEffect } from 'react';


const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name:: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const  App= () => {
  const name ='John';
  const isNameShowing = true;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've change the counter to " + counter);
  }, [counter]); // a dependency array
  
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : 'someone'}</h1>
      <Person name='Habib' lastName='BEN RONDHANE' age={29} />
      <Person name='Hounaida' lastName='ZEMZEM' age={29} />
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
}

export default App;
