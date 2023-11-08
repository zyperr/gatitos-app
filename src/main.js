import { LoadCats } from "./utils/LoadCats.js";
import { createCats } from "./components/CreateCats.js";
import { openMenu } from "./utils/Open-menu.js";
import { copyToClipboard } from "./utils/CopyToClipboard.js";
import { API_KEY, catsContainer, URLCatsRandom,submitForm } from "./Variables.js";
import { saveFavouriteCat, LoadFavouritesCats } from "./utils/favoriteCats.js";
import { VoteDown, VoteUp, LoadVotesCats } from "./utils/VotesCats.js";
import { toggleModal } from "./utils/toggleModal.js";
import { UploadCat } from "./utils/UploadCat.js";
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
  saveFavouriteCat,
  VoteUp,
  VoteDown,
  catsContainer,
  copyToClipboard
);

const inputupload = document.getElementById("file");
const previewContainer = document.querySelector(".preview__container");
inputupload.addEventListener("change", () => {
  const file = inputupload.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    const img = document.createElement("img");
    img.src = reader.result;
    previewContainer.innerHTML = "";
    previewContainer.appendChild(img);
  })
})
submitForm.addEventListener("click",(e) => {
  e.preventDefault()
  UploadCat()
})

toggleModal()
LoadVotesCats();
