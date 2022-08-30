import { useState } from "react";
import "./App.css";
import Callback from "./component/Callback";

function App() {
  const [Uicolor, setUicolor] = useState(null);

  const getColor = (color) => {
    setUicolor(color);
  };

  return (
    <div className="App">
      <div
        className="color-container"
        style={{ background: `${Uicolor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}

export default App;
