const userPlace = document.querySelector("#loginArea");
// const userPlaceMobile = document.querySelector("#userMobile");
const showOptions = document.querySelector(".loginPopUp");
const popUpText = document.querySelector(".accountInfo");
const loginActionBtn = document.querySelector("#userBtn");

userPlace.addEventListener("click", () => {
  showOptions.classList.toggle("hide");
});

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    //already logged in
    popUpText.innerHTML = `User, <b><i>${user.name}!</i></b>`;
    loginActionBtn.innerHTML = "log out";
    loginActionBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    //user logged out
    popUpText.innerHTML = "Log in to place order";
    loginActionBtn.innerHTML = "Log in";
    loginActionBtn.addEventListener("click", () => {
      location.href = "";
    });
  }
};
