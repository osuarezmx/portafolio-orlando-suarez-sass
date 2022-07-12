const navegacionMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-movil");

navToggle.addEventListener("click", () => {
    const visibility = navegacionMenu.getAttribute('data-visible');

    if (visibility === "false") {
        navegacionMenu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navegacionMenu.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});