import React, {useState} from "react";
import "./App.css";

function Increment() {
  const [n=0, setN] = useState(0);
  const count = {n};
  const handleClick = () => {
    setN(n + 1);
    console.log(n+1);
  }
  return (
    <div>

    <div className="heading">
      <center>
        <h1>Useless clicker</h1>
        <button onClick={handleClick} title="see if you can get to 999, that should be fun XD">
            You clicked this button {count.n} times
            </button>
            <br></br>
            <button onClick={() => setN(0)} title="reset the counter">
              click here to reset the counter
              </button>
            

       
      </center>
    </div>
    </div>
  );
}




export default Increment;