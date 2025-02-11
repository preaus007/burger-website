/*=============== SHOW MENU ===============*/
const navShow = document.getElementById("nav_toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

navShow.addEventListener("click", () => {
  navMenu.classList.add("show__menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show__menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show__menu");
};

navLink.forEach((i) => i.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow__header")
    : header.classList.remove("shadow__header");
};

window.addEventListener("scroll", shadowHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll_up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show__scroll")
    : scrollUp.classList.remove("show__scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        `.nav__menu a[href*= ${sectionId}]`
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active");
    } else {
      sectionClass.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true
});

sr.reveal(`.home__data, .footer`);
sr.reveal(`.home__dish`, { delay: 500, distance: "100px", origin: "bottom" });
sr.reveal(`.home__burger`, { delay: 1200, distance: "100px", duration: 1500 });
sr.reveal(`.home__ingradient`, { delay: 1600, interval: 100 });
sr.reveal(`.recipe__img, .delivery__img, .contact__image`, { origin: "left" });
sr.reveal(`.recipe__data, .delivery__data, .contact__data`, {
  origin: "right",
});
sr.reveal(`.popular__card`, { interval: 100 });
