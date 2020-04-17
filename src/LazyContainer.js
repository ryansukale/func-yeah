class LazyContainer {
  constructor(data) {
    this.data = data;
  }

  static of(data) {
    return new LazyContainer(data);
  }

  map(f) {
    return LazyContainer.of(() => f(this.data()));
  }

  fold(f) {
    return f(this.data());
  }
}

export default LazyContainer;