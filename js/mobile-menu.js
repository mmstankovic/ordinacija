// mobile-menu.js

const mbtn = document.querySelector("#mobile_menu_button")
const mlinks = document.querySelectorAll(".main_links")

mbtn.onclick = () => {
    for(let ml of mlinks) {
        ml.classList.toggle("items_hide")
    }
}