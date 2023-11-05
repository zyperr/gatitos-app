import { openMenu } from "./Open-menu.js";
export const LoadCats = async (getGatitos, url, key,displayCats,savedFavorite,container) => {
  let page = 0
  const loadCats = document.getElementById("load");

  loadCats.addEventListener("click", async () => {
    const data = await getGatitos(url, key,page);
    page += 1;
    return displayCats(data,savedFavorite,container,openMenu);
  });
};
