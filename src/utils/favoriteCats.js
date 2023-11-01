import {
  API_FAVORITE_CATS_DELETE,
  API_FAVORITE_CATS,
  API_KEY,
  body,
  favouritesContainer,
} from "../Variables.js";
import { copyToClipboard } from "./CopyToClipboard.js";
import { DisplayFavorites } from "../components/DisplayFavorites.js";
import { errorIcon, succesIcon } from "./Icons.js";
import { SnapBar } from "../components/Snapbar.js";

export async function LoadFavouritesCats() {
  const res = await fetch(API_FAVORITE_CATS, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await res.json();

  const UrlFavCats = data.map((item) => item.image);
  const IdToDelete = data.map((item) => item.id);

  favouritesContainer.innerHTML = "";
  DisplayFavorites(UrlFavCats, deleteFavoriteCat, copyToClipboard, IdToDelete);
}

export async function saveFavouriteCat(id) {
  const res = await fetch(API_FAVORITE_CATS, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });
  let message = "";
  let statusClassName = "";
  let statusIcon;
  if (res.status === 200) {
    message = `Guardado en Favoritos.`;
    statusClassName = "success";
    statusIcon = succesIcon;
  } else {
    message = "Algo salio mal.. intente mas tarde";
    statusClassName = "error";
    statusIcon = errorIcon;
  }
  const snap = SnapBar(message, statusClassName, statusIcon);
  body.appendChild(snap);

  setTimeout(() => body.removeChild(snap), 3000);
  LoadFavouritesCats();
}

export async function deleteFavoriteCat(id) {
  const res = await fetch(API_FAVORITE_CATS_DELETE(id), {
    method: "DELETE",
    headers: {
      "x-api-key": API_KEY,
    },
  });

  let message = "";
  let statusClassName = "";
  let statusIcon;

  if (res.status === 200) {
    message = `Se ha eliminado de favoritos`;
    statusClassName = "success";
    statusIcon = succesIcon;
  } else {
    message = "Algo salio mal.. intente mas tarde";
    statusClassName = "error";
    statusIcon = errorIcon;
  }
  const snap = SnapBar(message, statusClassName, statusIcon);
  body.appendChild(snap);
  setTimeout(() => body.removeChild(snap), 3000);
  LoadFavouritesCats();
}
