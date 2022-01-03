// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

let i = 0;

function App() {
  // ----------- bad practice
  const [array, setArray] = useState([]);
  const [obj,setObj] =useState({});

  // const addNumberToArray = () => {
  //   array.push(i);
  //   i++;
  //   console.log(array);
  //   setArray(array);
  // }
  // ----------- good practice

  const addNumberToArray = () => {
    // first make a copy and add the new element
    const arrayCopy = [...array, i];
    i++;
    console.log(i);
    setArray(arrayCopy);
    // ...array to copy the original one, and
  };

  const addItemToCarts = () => {
    const item = 'toilet paper'; 
    const objCopy = {...obj}; 
    objCopy[i] = item; 
    i++;
    setObj(objCopy);
  }
  return (
    <div className="App">
      <h2>{array}</h2>
      <button onClick={addNumberToArray}>click me to add to array</button>

      {/* <h2>{Object.keys(obj)}, {Object.values(obj)}</h2> */}
      {/* JSON.stringify: converts a JavaScript object or value to a JSON string  */}
      <h2>{JSON.stringify(obj)}</h2>

    {/* Event listener: onClick */}
      <button onClick={addItemToCarts}>click me to add to cart</button>
    </div>
  );
}

// function App() {
//   // -------------did not render!!
//   let badnum = 1;
//   const badAddNum = () => {
//     badnum += 1;
//     console.log(badnum);
//   };

//   // ---------------- use useState to tell react to re-render!!
//   const [num, setNum] = useState(1);

//   const addNum = () => {
//     setNum(num + 1);
//   };

//   console.log("re-rendering!!!!!! ");

//   return (
//     <div className="App">
//       {badnum}
//       <button onClick={badAddNum}> click me</button>

//       <br />
//       {num}
//       <button onClick={addNum}> click me</button>
//     </div>
//   );
// }

export default App;
