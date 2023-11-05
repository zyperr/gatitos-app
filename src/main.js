import { LoadCats } from "./utils/LoadCats.js";
import { createCats } from "./components/CreateCats.js";
import { openMenu } from "./utils/Open-menu.js";
import { copyToClipboard } from "./utils/CopyToClipboard.js";
import { API_KEY, catsContainer, URLCatsRandom } from "./Variables.js";
import { saveFavouriteCat, LoadFavouritesCats } from "./utils/favoriteCats.js";
import { VoteDown, VoteUp, LoadVotesCats } from "./utils/VotesCats.js";

async function randomCats(url, key,page = 0) {
  const res = await fetch(`${url}&page=${page}`, {
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
  randomCats,
  URLCatsRandom,
  API_KEY,
  createCats,
  saveFavouriteCat,
  catsContainer
);

LoadVotesCats();
