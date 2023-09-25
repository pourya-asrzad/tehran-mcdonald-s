import "./App.css";
import Menu from "./components/menu";
import Bill from "./components/bill";
import { useState } from "react";
function App() {
  const [total, settotal] = useState(0);
  let sum = 0;
  function getinapp(b) {
    // sum += b;
    settotal((prev) => prev + b);
    // console.log(sum);
    // savetotal = b;
    // settotal(b);
  }
  console.log(total);
  return (
    <div className="App">
      <Menu ongetinmenu={getinapp} />
      <Bill price={total} />
    </div>
  );
}

export default App;
