import "./keypad.css";

import Key from "./key";
import { keyTypes } from "./types";

const KeypadContainer = () => {
  return (
    <div className="keypadContainer padding container">
      <div className="keypadRow">
        <Key type={keyTypes.numeric(9)} />
        <Key type={keyTypes.numeric(8)} />
        <Key type={keyTypes.numeric(7)} />
        <Key type={keyTypes.operations.delete} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.numeric(6)} />
        <Key type={keyTypes.numeric(5)} />
        <Key type={keyTypes.numeric(4)} />
        <Key type={keyTypes.operations.addition} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.numeric(3)} />
        <Key type={keyTypes.numeric(2)} />
        <Key type={keyTypes.numeric(1)} />
        <Key type={keyTypes.operations.substraction} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.symbols.dot} />
        <Key type={keyTypes.numeric(0)} />
        <Key type={keyTypes.operations.division} />
        <Key type={keyTypes.operations.multiplication} />
      </div>

      <div className="keypadRow">
        <Key type={keyTypes.operations.reset} />
        <Key type={keyTypes.operations.calculate} />
      </div>
    </div>
  );
};

export default KeypadContainer;
