import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import InputRC from "./components/InputRC";
import DynamicTable from "./components/DynamicTable";

function App() {
  let [rows, setRows] = useState([]);
  let [columns, setColumns] = useState([]);
  let [position, setPosition] = useState({ x: 0, y: 0 });

  function changeRC(n, type) {
    let temp = [];
    if (type == "r") {
      for (let i = 0; i < n; i++) {
        temp.push("r");
      }
      setRows(temp);
      setPosition({ x: 0, y: 0 });
    } else {
      for (let i = 0; i < n; i++) {
        temp.push("c");
        setColumns(temp);
        setPosition({ x: 0, y: 0 });
      }
    }
  }

  function navigate(d) {
    let tempX = position.x + d.x;
    let tempY = position.y + d.y;
    if (tempX < 0) {
      tempX = 0;
    }
    if (tempX > columns.length - 1) {
      tempX = columns.length - 1;
    }

    if (tempY < 0) {
      tempY = 0;
    }
    if (tempY > rows.length - 1) {
      tempY = rows.length - 1;
    }
    setPosition({ x: tempX, y: tempY });
  }

  return (
    <div className="App">
      <InputRC changeRC={changeRC} />
      <Navigation navigate={navigate} />
      <DynamicTable data={{ rows, columns, position }} />
    </div>
  );
}

export default App;
