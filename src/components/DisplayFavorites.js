import { favouritesContainer } from "../Variables.js";
import { deletedSave, copyUrl } from "../utils/Icons.js";
import { Btn } from "./Btn.js";
export function DisplayFavorites(dataImage, deleteFn, copyFn, IdToDelete) {
  dataImage.map(({ url, id }, index) => {
    const btns_container = document.createElement("div");
    btns_container.classList.add("btns-container-favorites");
    //--------------
    const btnDelete = Btn(deleteFn, "cat-btn", deletedSave, IdToDelete[index]);
    //--------------
    const btnCopy = Btn(copyFn, "copy", copyUrl, url);
    //--------------
    const cat = document.createElement("div");
    cat.classList.add("cat");
    cat.id = id;
    //--------------
    const img = document.createElement("img");
    img.src = url;
    img.alt = "random cat";
    img.classList.add("cat-img");
    img.loading = "lazy";
    //-----------------------
    btns_container.appendChild(btnDelete);
    btns_container.appendChild(btnCopy);
    //-----------------------
    cat.appendChild(btns_container);
    cat.appendChild(img);
    favouritesContainer.appendChild(cat);
  });
}
