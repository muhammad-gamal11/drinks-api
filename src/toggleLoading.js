import get from "./getElement.js";

const loading = get(".loading");

const showLoading = () => {
  loading.classList.remove("hide-loading");
};
const hideLoading = () => {
  loading.classList.add("hide-loading");
};

export { showLoading, hideLoading };
