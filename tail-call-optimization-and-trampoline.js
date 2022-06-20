function sumAll(n, i = 0, result = 0) {
  return i > n 
  ? result 
  : sumAll(n, i + 1, i + result);
}
console.log(sumAll(5)); // 15
// a call to this function with a large number
// will fail with "Maximum call stack size exceeded"
// because javascript still does not implements
// Tail-call optimization

// Trampoline allows us to work with tail-recursive
// functions in a language that does not have tail-call
// optimization

// rewrite sumAll to return thunks instead of plain results
function sumAll(n, i = 0, result = 0) {
  return i > n 
  ? () => result 
  : () => sumAll(n, i + 1, i + result);
}

// write utility trampoline that loops in an iterative way
// and invokes the thunk functions. The loop continues
// as long as the thunks return other thunk functions
function trampoline(f) {
  return function (...args) {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }

    return result;
  };
}

console.log(trampoline(sumAll)(10000)); // 50005000
