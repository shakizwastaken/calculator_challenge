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

    if (this.action) this.result[this.result.length - 1] = this.getResult();

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
    if (newVal.value === "DELETE") {
      this.current = newVal.fn(this.current);
      this.result[this.result.length - 1] = this.getResult();
      return this;
    }

    this.action = newVal;

    if (this.result.length === 0 || this.current !== 0) {
      this.results = [];
      this.previous = this.current;
    }

    this.current = 0;
    return this;
  };

  calc = () => {
    let result = this.getResult();
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

  getResult = () => this.action?.fn(this.previous, this.current);

  clone() {
    return new Operation(this.current, this.previous, this.action, this.result);
  }
}
