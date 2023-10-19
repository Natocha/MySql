import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [colorChangeCount, setColorChangeCount] = useState(0); // Nueva variable de estado para contar los cambios

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setColorChangeCount(colorChangeCount + 1); // Incrementa el contador al cambiar el color
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <p>Color de fondo cambiado {colorChangeCount} veces.</p>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
