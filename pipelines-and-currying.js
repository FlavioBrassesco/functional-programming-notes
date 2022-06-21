const pipe =
  (...args) =>
  (value) =>
    args.reduce((v, fn) => fn(v), value);

pipe(
  (n) => n * 2,
  (n) => n - 1
)(5); // 9
// pipes work with only one value type
