import { openMenu } from "./Open-menu.js";
import { createCats } from "../components/CreateCats.js";
export const LoadCats = async (getGatitos, url, key,savedFavorite,voteUp,VoteDown,container,copyToClipboard) => {
  let page = 0
  const loadCats = document.getElementById("load");

  loadCats.addEventListener("click", async () => {
    const data = await getGatitos(url, key,page);
    page += 1;
    return createCats(data,savedFavorite,container,openMenu,VoteDown,voteUp,copyToClipboard);
  });
};
