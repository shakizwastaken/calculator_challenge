import "./styles/app.css";

import { useState } from "react";
import HeaderContainer from "./components/header";
import KeypadContainer from "./components/keypad";
import DisplayContainer from "./components/display";
import { CalculatorProvider } from "./context/calculator";

function App() {
  const [theme, setTheme] = useState("default"); //must add state context

  return (
    <CalculatorProvider>
      <div className={`app theme-${theme}`}>
        <div className="app-container">
          <HeaderContainer {...{ theme, setTheme }} />
          <DisplayContainer {...{ theme }} />
          <KeypadContainer />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
