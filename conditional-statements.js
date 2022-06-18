// switch-case replacement
const actionMap = {
  increment: (x) => x + 1,
  decrement: (x) => x - 1,
};

const doAction = (x, actionName) => {
  const action = actionMap[actionName];
  return action ? action(x) : x;
};
doAction(0, "increment"); // 1
doAction(0, "decrement"); // -1
