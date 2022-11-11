import "./keypad.css";

import Key from "./key";
import { keyStyles, keyTypes } from "./types";

const KeypadContainer = () => {
  return (
    <div className="keypadContainer padding container">
      <div className="keypadRow">
        <Key type={keyTypes.numeric(9)} />
        <Key type={keyTypes.numeric(8)} />
        <Key type={keyTypes.numeric(7)} />
        <Key type={keyTypes.actions[0]} style={keyStyles.primary} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.numeric(6)} />
        <Key type={keyTypes.numeric(5)} />
        <Key type={keyTypes.numeric(4)} />
        <Key type={keyTypes.actions[1]} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.numeric(3)} />
        <Key type={keyTypes.numeric(2)} />
        <Key type={keyTypes.numeric(1)} />
        <Key type={keyTypes.actions[2]} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.symbols.dot} />
        <Key type={keyTypes.numeric(0)} />
        <Key type={keyTypes.actions[3]} />
        <Key type={keyTypes.actions[4]} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.actions[5]} style={keyStyles.primary} />
        <Key
          type={{ label: "=", value: "CALCULATE" }}
          style={keyStyles.accent}
        />
      </div>
    </div>
  );
};

export default KeypadContainer;
