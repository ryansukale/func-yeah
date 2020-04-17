const noop = () => null;
const isFunction = f => typeof f === 'function';

class Either {
  constructor(data) {
    this.data = data;
  }

  static of(data) {
    return new Right(data);
  }

  static fromPromise(p) {
    return new PromiseEither(p);
  }

  static fromCondition(predicate, onSuccess, onFailure = noop) {
    const condition = isFunction(predicate) ? predicate() : predicate;
    const rightValue = isFunction(onSuccess) ? onSuccess() : onSuccess;
    const leftValue = isFunction(onFailure) ? onFailure() : onFailure;

    return condition ? Right.of(rightValue) : new Left(leftValue);
  }

  static fromTry(f, message) {
    try {
      return Right.of(f());
    } catch (error) {
      if (!message) {
        return new Left(error);
      }
      return new Left({message, error});
    }
  }
}

class Right extends Either {
  static of(data) {
    return new Right(data);
  }

  join() {
    return this.data;
  }

  map(f) {
    return new Right(f(this.data));
  }

  fold(f, g) {
    return g(this.data);
  }
}

class Left extends Either {
  map(f) {
    return this;
  }

  join() {
    return this;
  }

  fold(f, g) {
    return f(this.data);
  }
}

class PromiseEither extends Either {
  map(fn) {
    return new PromiseEither(
      this.data.then(fn)
    );
  }

  fold(left, right) {
    return this.data.then(right).catch(left);
  }
}

Either.Right = Right;
Either.Left = Left;

export default Either;