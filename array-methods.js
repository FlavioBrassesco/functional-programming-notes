const array = [1, 2, 3];
Array.isArray(array);
// true

const numbers = [1, 2, 3, 4];
const isEven = (n) => n % 2 == 0;
const evenNumbers = numbers.filter(isEven);
// [2, 4]

const games = [
  { title: "Starcraft II", genre: "RTS" },
  { title: "World of Warcraft", genre: "MMORPG" },
  { title: "Diablo", genre: "ARPG" },
  { title: "Warcraft III", genre: "RTS" },
  { title: "Heroes of the storm", genre: "MOBA" },
];
const isRPG = (game) => ["MMORPG", "ARPG"].includes(game.genre);
const rpgGames = games.filter(isRPG);
// [{title:"World of Warcraft", genre:"MMORPG"}, {title:"Diablo",genre:"ARPG"}]

const triple = (n) => n * 3;
const newNumbers = numbers.map(triple);
// [3,6,9,12]

const gamesTitles = games.map((game) => game.title);
// ["Starcraft II","World of Warcraft","Diablo","Warcraft III","Heroes of the storm"]

const add = (total, n) => total + n;
const total = numbers.reduce(add, 0);
// 10

const countByGenre = (genreMap, game) => {
  const count = genreMap[game.genre] || 0;
  return {
    ...genreMap,
    [game.genre]: count + 1,
  };
};
const gamesByGenreCounts = games.reduce(countByGenre, {});
//{RTS:2, MMORPG:1, ARPG:1, MOBA:1}

const unsortedNumbers = [4, 2, 3, 1];
const asc = (a, b) => (a === b ? 0 : a < b ? -1 : 1);
const sortedNumbers = [...unsortedNumbers].sort(asc);
// [1, 2, 3, 4]

const firstRpg = games.find(isRPG);
// {title: "World of Warcraft", genre: "MMORPG"}

const firstRpgIndex = games.findIndex(isRPG);
// 1

const areAllRpg = games.every(isRPG);
// false

const hasOneRpg = games.some(isRPG);
// true

const moreGames = games.concat({ title: "Diablo II", genre: "ARPG" });
// { ...games, {title:"Diablo II", genre:"ARPG"}}
