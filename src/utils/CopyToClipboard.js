import { SnapBar } from "../components/Snapbar.js";
import { body } from "../Variables.js";
import { succesIcon,errorIcon } from "./Icons.js";
export const copyToClipboard = async (text) => {
    let textInfo = ""
    let statusIcon ;
    try{
        textInfo ="Copiado al portapapeles"
        statusIcon = succesIcon
        await navigator.clipboard.writeText(text);
    }catch(erro){
        textInfo = "Ha ocurrido un error"
        statusIcon = errorIcon
        console.error("error",erro)
    }
    const snap = SnapBar(textInfo,"success", statusIcon);
    body.appendChild(snap);
    setTimeout(() => body.removeChild(snap), 3000);
}