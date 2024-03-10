import React, {useState} from "react";
import "./App.css";

function Increment() {
  const [n=0, setN] = useState(0);
  const count = {n};
  const handleAdd = () => {
    setN(n + 1);
    console.log(n+1);
  }
  const handleMin = () => {
    setN(n - 1);
    console.log(n-1);
  }
  return (
      <center>
    <div>

        <h1 className="header">Useless clicker</h1>
    <div className="heading">
        <h1>{count.n}</h1>
        <button className="plus" onClick={handleAdd} >
            click here to add + 
            </button>
            
            <button className="minus" onClick={handleMin}>
            click here to reduce -
            </button>
            <br></br>
            <button className="reset" onClick={() => setN(0)} title="reset the counter">
              click here to reset the counter
              </button>
            

       
    </div>
    </div>
      </center>
  );
}




export default Increment;