export const Btn = (fn,className,icon,fnHandler) => {
    const btn = document.createElement("button");
    btn.classList.add(className)
    btn.innerHTML = icon;
    btn.addEventListener("click",() => {
        fn(fnHandler)
      })
    return btn
}