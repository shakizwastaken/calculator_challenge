export class Action {
  constructor(label, value, fn) {
    this.label = label;
    this.value = value;
    this.fn = fn;
  }
}

export class Operation {
  constructor(current, previous, action, result) {
    this.action = action;
    this.current = current;
    this.previous = previous;
    this.result = result;
  }

  addNum = (newNum) => {
    this.current =
      (this.current === undefined ? 0 : this.current) * 10 + newNum;

    // if (this.action) this.calc();

    return this;
  };

  setPrevious = (newVal) => {
    this.previous = newVal;
    return this;
  };

  setCurrent = (newVal) => {
    this.current = newVal;
    return this;
  };

  setAction = (newVal) => {
    this.action = newVal;
    this.previous = this.current;
    this.current = 0;

    return this;
  };

  calc = () => {
    let result = this.action?.fn(this.previous, this.current);
    this.result.push(result);

    this.previous = this.result[this.result.length - 1];
    this.current = 0;

    return this;
  };

  formatPrev = () => {
    return `${this.previous === undefined ? "" : this.previous} ${
      this.action?.label === undefined ? "" : this.action.label
    } ${this.current} ${
      this.result[this.result.length - 1] === undefined
        ? ""
        : `= ${this.result[this.result.length - 1]}`
    }`;
  };

  clone() {
    return new Operation(this.current, this.previous, this.action, this.result);
  }
}
