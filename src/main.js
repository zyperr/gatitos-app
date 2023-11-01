import { LoadCats } from "./utils/LoadCats.js";
import { createCats } from "./components/CreateCats.js";
import { openMenu } from "./utils/Open-menu.js";
import { copyToClipboard } from "./utils/CopyToClipboard.js";
import { API_KEY, catsContainer, URLCatsRandom, page } from "./Variables.js";
import { saveFavouriteCat, LoadFavouritesCats } from "./utils/favoriteCats.js";
import { VoteDown, VoteUp, LoadVotesCats } from "./utils/VotesCats.js";
async function randomCats(url, key) {
  const res = await fetch(url, {
    headers: {
      "x-api-key": key,
    },
  });
  const data = await res.json();
  return data;
}

const catsData = await randomCats(URLCatsRandom, API_KEY);

createCats(
  catsData,
  saveFavouriteCat,
  catsContainer,
  openMenu,
  VoteDown,
  VoteUp,
  copyToClipboard
);

LoadFavouritesCats();

LoadCats(
  page,
  randomCats,
  URLCatsRandom,
  API_KEY,
  createCats,
  saveFavouriteCat,
  catsContainer
);

LoadVotesCats();
