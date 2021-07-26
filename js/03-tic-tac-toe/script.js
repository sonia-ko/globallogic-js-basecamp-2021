import * as Modal from "./modal.js";
import * as Game from "./game.js";

/// MODAL WINDOW FUNCTIONALITY

Modal.btnOpenModal.addEventListener("click", Modal.openModal);
Modal.btnCloseModal.addEventListener("click", Modal.closeModal);
Modal.overlay.addEventListener("click", Modal.closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !Modal.modal.classList.contains("hidden")) {
    Modal.closeModal();
  }
});

// Game functionality

document.addEventListener("mousedown", Game.dragStart, true);

document.addEventListener("mouseup", Game.dragEnd, true);

document.addEventListener("mousemove", Game.onDrag, true);

Game.startGameBtn.addEventListener("click", Game.gameStart);

Game.gameStart();
