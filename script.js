// Menu btn toggle

const menuBtn = document.querySelector(".hamburger-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("show");
});

// Back this project btn - open/close modal

const backProjectBtn = document.querySelector(".back-this-project-btn");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".pledge-selection-overlay");
const body = document.body;

backProjectBtn.addEventListener("click", () => {
  modal.classList.toggle("show");
  body.classList.toggle("active-modal");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("show");
  body.classList.toggle("active-modal");
});

// Project tier selection style toggle

const tiers = document.getElementsByName("tier");

tiers.forEach((tier) =>
  tier.addEventListener("click", () => {
    // clear style from all before
    if (tier.checked) {
      tiers.forEach((tier) => {
        let tierLabel = tier.parentNode.parentNode;
        tierLabel.classList.remove("selected");
      });
    }
    // on click add style
    let tierLabel = tier.parentNode.parentNode;
    tierLabel.classList.add("selected");
  })
);
