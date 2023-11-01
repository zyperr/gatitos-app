
export const SnapBar = (text,className,icon) => {
    const snapContainer = document.createElement("div")
    snapContainer.className = `snap-container-open ${className}`
    const snapText = document.createElement("p")
    snapText.innerHTML = `${icon} ${text}`
    snapText.classList.add("snap-text")
    snapContainer.appendChild(snapText)
    return snapContainer
}