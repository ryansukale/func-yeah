class Container {
  constructor(data) {
    this.data = data;
  }

  static of(data) {
    return new Container(data);
  }

  map(f) {
    return Container.of(
      f(this.data)
    );
  }
}

export default Container;