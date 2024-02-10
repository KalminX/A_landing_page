function toggleMenu() {
  let overlay = document.querySelector(".overlay");

  if (overlay.style.display === "block") {
    overlay.style.display = "none";
    document.body.style.opacity = 1;
    document.body.style.background = "inherit";
  } else {
    overlay.style.display = "block";
    overlay.style.background = "white";
    document.body.style.background = "rgba(0, 0, 0, 0.)";
  }

  let menuIcon = document.querySelector(".hamburger-menu");
  menuIcon.classList.toggle("change");
}

featureDropDown = document.querySelector(".dropdown2");
featureDropDown.addEventListener("click", () => {
  let child = document.querySelector(".feature-dropdown2");
  if (child.style.display === "none") {
    featureDropDown.style.setProperty(
      "--arrow",
      'url("images/icon-arrow-up.svg")'
    );
    child.style.display = "flex";
  } else {
    featureDropDown.style.setProperty(
      "--arrow",
      'url("images/icon-arrow-down.svg")'
    );
    child.style.display = "none";
  }
});

companyDropDown = document.querySelector("#company");
companyDropDown.addEventListener("click", () => {
  let child = document.querySelector(".company-dropdown2");
  if (child.style.display === "none") {
    companyDropDown.style.setProperty(
      "--arrow",
      'url("images/icon-arrow-up.svg")'
    );
    child.style.display = "flex";
  } else {
    companyDropDown.style.setProperty(
      "--arrow",
      'url("images/icon-arrow-down.svg")'
    );
    child.style.display = "none";
  }
});

/* Handle the event of touching other parts of the screen*/
document.addEventListener("click", function (event) {
  let overlay = document.querySelector(".overlay");
  let isClickInOverlay = document
    .querySelector("#overlay")
    .contains(event.target);
  let isclickInHamburger = document
    .querySelector(".hamburger-menu")
    .contains(event.target);
  let hasChange = document.querySelector(".hamburger-menu").classList.contains('change');
  if (!isClickInOverlay && !isclickInHamburger && hasChange) {
    closeOverlay();
    let menuIcon = document.querySelector(".hamburger-menu");
    menuIcon.classList.toggle("change");
  }
});
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
