import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);
  // console.log(data);
  // display drinks
  const section = await displayDrinks(data);
  // console.log(section);
  // console.log(section);
  // ===============| below code doesn't run if there's an error |===============
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
