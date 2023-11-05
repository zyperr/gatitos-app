export const createSubId = () => {
    // Genera un id random que no cambie cuando se refresque la pagina
    let storedUserId = localStorage.getItem('userId');

    if (!storedUserId) {
        storedUserId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('userId', storedUserId);
    }

    return storedUserId;
}