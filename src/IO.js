const compose = require('@ramda/compose');

class IO {
  static of(x) {
    return new IO(() => x);
  }

  constructor(fn) {
    this.data = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.data));
  }

  exec(f) {
    return f(this.data())
  }
}

export default IO;