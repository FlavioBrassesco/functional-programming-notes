const games = [
  { title: "Starcraft II", genre: "RTS" },
  { title: "World of Warcraft", genre: "MMORPG" },
  { title: "Diablo", genre: "ARPG" },
  { title: "Warcraft III", genre: "RTS" },
  { title: "Heroes of the storm", genre: "MOBA" },
];
// for-in replacement
Object.keys(games).forEach((key) => console.log(games[key]));

const numbers = [4, 2, 3, 1];
// for-of replacement
numbers.forEach((number) => console.log(number));

// "break" inside for loop replacement
games.every((game) => {
  if (game.title.startsWith("Warcraft")) return false;
  return true;
});
