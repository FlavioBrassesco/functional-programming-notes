const pipe =
  (...args) =>
  (value) =>
    args.reduce((v, fn) => fn(v), value);

pipe(
  (n) => n * 2,
  (n) => n - 1
)(5); // 9
// pipes work with only one value type

// pipeline chaining methods must return same object type
const games = [
  { title: "Starcraft II", genre: "RTS", hoursPlayed: 40 },
  { title: "World of Warcraft", genre: "MMORPG", hoursPlayed: 1000 },
  { title: "Guild Wars 2", genre: "MMORPG", hoursPlayed: 200 },
  { title: "Elder scrolls online", genre: "MMORPG", hoursPlayed: 400 },
  { title: "Diablo", genre: "ARPG", hoursPlayed: 200 },
  { title: "Diablo II", genre: "ARPG", hoursPlayed: 300 },
  { title: "Warcraft III", genre: "RTS", hoursPlayed: 100 },
  { title: "Heroes of the storm", genre: "MOBA", hoursPlayed: 20 },
];

const isRPG = (game) => ["MMORPG", "ARPG"].includes(game.genre);
const toGenreView = (previous, game) => {
  const result = {
    ...previous,
  };
  result[game.genre] = result[game.genre]?.length
    ? result[game.genre].concat({
        title: game.title,
        hoursPlayed: game.hoursPlayed,
      })
    : [{ title: game.title, hoursPlayed: game.hoursPlayed }];
  return result;
};

let groupedByGenre = games.filter(isRPG).reduce(toGenreView, {});

// The identity function is a unary function that returns the value it gets as its argument
const identity = (x) => x;

// logIdentity function gives a way to inspect the data in
// the pipeline without affecting the flow. It returns the
// argument it gets but also logs it to the console
const logIdentity = (logger) => (x) => {
  logger(x);
  return x;
};

const logger = logIdentity(console.log);
// just an example of how you can add more utility to the function

groupedByGenre = games
  .map(logger)
  .filter(isRPG)
  .map(logger)
  .reduce(toGenreView, {}); // end of chain since toGenreView returns an object

// Currying is a technique for breaking down a function that
// takes multiple arguments into a series of functions each
// taking only one argument. (yes, last logIdentity function is a curried function)
const isGenre = (genre) => (game) => [genre].includes(game.genre);

const mmorpgs = games.filter(isGenre("MMORPG"));
// Array(3) [ {…}, {…}, {…} ]

// non curried version:
const isGenre_ = (game, genre) => [genre].includes(game.genre);
const mmo = games.filter((g) => isGenre_(g, "MMORPG"));
// Yikes!
