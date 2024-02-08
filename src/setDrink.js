const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log(e.target.parentElement.dataset.id);
    const id = e.target.parentElement.dataset.id;
    // ===============| storing the data in local storage |===============
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
