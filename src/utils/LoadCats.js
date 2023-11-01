import { openMenu } from "./Open-menu.js";
export const LoadCats = async (page, getGatitos, url, key,displayCats,savedFavorite,container) => {
  const loadCats = document.getElementById("load");
  const data = await getGatitos(url, page, key);

  loadCats.addEventListener("click", () => {
    page += 1;
    displayCats(data,savedFavorite,container,openMenu);
  });
};
