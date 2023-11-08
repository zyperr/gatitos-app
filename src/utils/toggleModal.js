export const toggleModal = () => {
    const btn = document.querySelector(".handle__modal");
    const containerModal = document.querySelector(".form__wrapper");
    const closeModal = document.getElementById("close__modal");
    btn.addEventListener("click", () => {
        containerModal.classList.add("active");
    })
    containerModal.addEventListener("click",(e) => {
        if (e.target === containerModal) {
            containerModal.classList.remove("active");
        }
        if(e.target === closeModal) {
            containerModal.classList.remove("active");
        }
    })
}