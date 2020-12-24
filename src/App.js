/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Counter from './redux/Counter';
import Counter2 from './redux/Counter2';

function App() {
  // let success=true
  // let success = {
  //   color: "red",
  //   fontSize: "0px",
  // }; 
  let style = {
    color: "green",
    textAlign: "center",
  };
  return (
    <div className="App" style={style}>
   <h2>Welcome to react-redux.</h2>
   <Counter2></Counter2>
   <Counter></Counter>
    </div>
  );
}

export default App;
