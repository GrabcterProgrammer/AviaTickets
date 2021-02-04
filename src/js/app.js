// import images
import logo from "../img/logo.png"

// import styles
import "normalize.css"
import "../scss/style.scss"

// import elements
import ToggleTheme from "./lib/toggleTheme";
import location from "./store/location";

// variables
const toggleBtn = document.querySelector(".header-menu__toggleTheme");

new ToggleTheme("toggleBtn", {});

// Logic
// const test = document.querySelector(".main");
// console.log(test.style.getPropertyPriority("mainColor"))
//
// location.init().then(data => {
//     console.log(location.getCitiesOnPostCode("RU"))
// })



