class Maybe {
  constructor(data) {
    this.data = data;
  }

  static of(data) {
    return new Maybe(data);
  }

  isEmpty() {
    return this.data === undefined || this.data === null;
  }

  join() {
    if (this.isEmpty()) {
      return this;
    }

    return this.data;    
  }

  map(f) {
    if (this.isEmpty()) {
      return this;
    }

    return Maybe.of(
      f(this.data)
    );
  }
}

export default Maybe;