//togel clas aktif untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");
//ketika klik humbrgr menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//togel clas aktif untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

//togel clas aktif untuk search shopping cart

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//togel clas aktif untuk search shopping cart

const sp = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  sp.classList.toggle("active");
  e.preventDefault();
};

//fungsi klik luar elemen.
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !sp.contains(e.target)) {
    sp.classList.remove("active");
  }
});

//modal box
const itemDeteilModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDeteilModal.style.display = "flex";
    e.preventDefault();
  };
});

//klik tombol close model
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDeteilModal.style.display = "none";
  e.preventDefault();
};

// //klik di luar modal
// const modal = document.querySelector("#item-detail-modal");

window.onclick = (e) => {
  if (e.target === modal) {
    itemDeteilModal.style.display = "none";
  }
};
