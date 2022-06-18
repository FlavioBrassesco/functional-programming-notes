const objects = [{ id: 1 }, { id: 2 }];

const hasId = (id) => (element) => element.id === id;
objects.find(hasId(1));
// { id: 1 }

const games = [
  { title: "Starcraft II", genre: "RTS" },
  { title: "World of Warcraft", genre: "MMORPG" },
  { title: "Diablo", genre: "ARPG" },
  { title: "Warcraft III", genre: "RTS" },
  { title: "Heroes of the storm", genre: "MOBA" },
];

const by = (key) => (a, b) => a[key].localeCompare(b[key]);
const gamesByTitle = [...games].sort(by("title"));
// [{ title:"Diablo", genre: "ARPG"}, { title:"Heroes of the storm", genre:"MOBA"}...]

const createCount = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
const count = createCount();
count(); // 1
count(); // 2
// etc