/// MODAL WINDOW FUNCTIONALITY

export const modal = document.querySelector(".modal");
export const overlay = document.querySelector(".overlay");
export const btnCloseModal = document.querySelector(".close-modal");
export const btnOpenModal = document.querySelector(".rules");

export const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
