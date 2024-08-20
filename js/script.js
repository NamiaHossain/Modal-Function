/////////////Main code////////////////////////////////
// var button = document.querySelector(".got-this");
// var modal = document.querySelector(".modal");
// var modalX = document.querySelector(".modal-x");

// button.addEventListener("click", function () {
//   modal.classList.add("show-modal");
//   button.innerText = "You've got this!!!";
// });

// modalX.addEventListener("click", function () {
//   modal.classList.remove("show-modal");
//   button.innerText = "Who's got this?";
// });
// document.addEventListener("keydown", function (e) {
//   //console.log(e);
//   if (e.key === "Escape") {
//     console.log("Escape button was pressed.");
//     if (modal.classList.contains("show-modal")) {
//       modal.classList.remove("show-modal");
//       button.innerText = "Who's got this?";
//     }
//   } else {
//     console.log("Escape button was not pressed.");
//   }
// });
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////Refactoring the code//////////////////////
var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  if (modal.classList.contains("show-modal")) {
    closeModal();
  } else {
    openModal();
  }
});

modalX.addEventListener("click", function () {
  closeModal();
});
document.addEventListener("keydown", function (e) {
  //console.log(e);
  if (e.key === "Escape") {
    console.log("Escape button was pressed.");
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  } else {
    openModal();
    console.log("Escape button was not pressed.");
  }
});
var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "you know who's got this?";
};
var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};
