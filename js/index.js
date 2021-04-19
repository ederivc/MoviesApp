import Checker from "./checker.js";
import Cards from "./cards.js";

window.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".btn-search");
  const cards = new Cards();
  cards.getMoviesExample();

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const checker = new Checker();
    checker.verifyInput();
  });
});
