import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = (data) => {
  const { drinks } = data;
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    // ===============| hide loading |===============
    hideLoading();
    title.textContent = "sorry, no drinks matched your searched";
    section.innerHTML = null;
    return;
  }
  // ===============|  |===============
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
      //   console.log(drink);
      return `
    <a href="drink.html">
    <article class="cocktail" data-id=${id}>
      <img src=${img} alt=${name} />
      <h3>${name}</h3>
    </article>
  </a>`;
    })
    .join("");
  // ===============| hide loading |===============
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
