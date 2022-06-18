const repo = Object.freeze({
  name: "Functional Programming Notes",
  author: {
    firstName: "Flavio",
    lastName: "Crockford",
  },
});

// Best choice is to use eslint-plugin-functional
// and create a rule: "functional/immutable-data": "error"
// since to freeze an object composed of objects, we'd need
// an utility function "deepFreeze()"