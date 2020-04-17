func-yeah
----

Bare bones implementation of javascript functional utilties. These will cover most of your use cases, or if you're just playing around.
If you're looking for more comprehensive implementation, look at [Folktale](https://folktale.origamitower.com/) or [Fantasy-Land](https://github.com/fantasyland).

This library was built as part of my youtube tutorial series on functional programming. - http://bit.ly/functional-programming-concepts

```
yarn add func-yeah
```

### Available Types

#### Usage
```
import Either from 'func-yeah/dist/Either';
```

| Name          | Tutorial  | 
| ---- | ---- |
|Container      | [Intro](https://www.youtube.com/watch?v=LsfbJXBr6Bo&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=3&t=0s)|
|LazyContainer  | [Intro](https://www.youtube.com/watch?v=CmGl4ltvTLg&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=22&t=0s)|
|Either         | [Intro](https://www.youtube.com/watch?v=zz88GXVSido&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=6&t=0s), [fromCondition](https://www.youtube.com/watch?v=zz88GXVSido&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=6&t=0s), [fromTry](https://www.youtube.com/watch?v=syNlylrrJhA&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=8&t=0s), [fromPromise](https://www.youtube.com/watch?v=KWX440Y1g4M&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=9&t=0s)|
|Maybe          | [Intro](https://www.youtube.com/watch?v=1uNmsvBbQuw&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=5&t=0s)|
|IO             | [Intro](https://www.youtube.com/watch?v=p2h6WHcV8CY&list=PL3xLMxDtN7I4DCy7GAwlJXI4Ut7KmsBsa&index=25&t=0s)|

----

### Operators

#### Usage
```
import map from 'func-yeah/dist/operators/map';
```
- map
- join
- chain
