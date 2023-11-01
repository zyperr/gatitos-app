import { savedSvg,thumDown,thumUp,dots_horizontal,copyUrl } from "../utils/Icons.js";
import { Btn } from "./Btn.js";
export function createCats(data,Savefn,catsContainer,dotsFn,btndown,btnup,btnFnCopy){
    data.map(({url,id}) => {
      const btns_container = document.createElement("div");
      btns_container.classList.add("btns-container")
      //--------------
      const dots = Btn(dotsFn,"dots",dots_horizontal,btns_container)
      //--------------
      const up = Btn(btnup,"thumb-up",thumUp,id)
      //--------------
      const down = Btn(btndown,"thumb-down",thumDown,id)
      //--------------
      const btnSave = Btn(Savefn,"cat-btn",savedSvg,id)
      //--------------
      const btnCopy = Btn(btnFnCopy,"copy",copyUrl,url)
      //--------------
      const cat = document.createElement("div");
      cat.classList.add("cat");
      cat.dataset.cat_id = id
      //--------------
      const img = document.createElement("img");
      img.src = url;
      img.alt = "random cat";
      img.classList.add("cat-img");
      img.loading = "lazy"
      //-----------------------
      btns_container.appendChild(btnSave)
      btns_container.appendChild(up)
      btns_container.appendChild(down)
      btns_container.appendChild(btnCopy)
      //-----------------------
      cat.appendChild(dots)
      cat.appendChild(btns_container)
      cat.appendChild(img)
      catsContainer.appendChild(cat)
    })
  }