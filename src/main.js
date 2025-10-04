import "./style.css";
import { toggleTheme, getInitialTheme, DARK_THEME, LIGHT_THEME } from "./theme";
import Typed from "typed.js";

const toggleIcon = document.querySelector(".toggle-icon");
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");

function setIconInitialClass() {
  const theme = getInitialTheme();
  if (theme === DARK_THEME) {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
}

setIconInitialClass();

let typed = new Typed(".text_intro", {
  strings: ["John Sarmiento", "a Web Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  showCursor: false,
});

toggleIcon.addEventListener("click", function (e) {
  const newTheme = toggleTheme();
  if (newTheme === LIGHT_THEME) {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }

  if (newTheme === DARK_THEME) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
});
