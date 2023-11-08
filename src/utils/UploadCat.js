import { API_UPLOAD_CATS, API_KEY, body } from "../Variables.js";
import { SnapBar } from "../components/Snapbar.js";
import { errorIcon, succesIcon } from "./Icons.js";
import { saveFavouriteCat } from "./favoriteCats.js";
export const UploadCat = async () => {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const file = formData.get("file");
  const res = await fetch(API_UPLOAD_CATS, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
    },
    body: formData,
  });
    const data = await res.json()
  if (res.status !== 201) {
    const snap = SnapBar(
      "Algo salio mal.. intente mas tarde",
      "error",
      errorIcon
    );
    body.appendChild(snap);
    setTimeout(() => body.removeChild(snap), 2000);
  } else {
    const snap = SnapBar("Gatito subido con exito", "success", succesIcon);
    body.appendChild(snap);
    setTimeout(() => body.removeChild(snap), 2000);
    saveFavouriteCat(data.id)
  }
};
