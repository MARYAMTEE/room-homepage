const mobileImage = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg"
];

const desktopImage = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
];

const heroTitles = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];

const heroDescriptions = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

const mobileImages = document.querySelector(".room__hero-mobile");
const desktopImages = document.querySelector(".room__hero-desktop");
const mobilePrev = document.querySelector(".mobile__nav .room__slider-button--left");
const mobileNext = document.querySelector(".mobile__nav .room__slider-button--right");

const desktopPrev = document.querySelector(".desktop__nav .room__slider-button--left");
const desktopNext = document.querySelector(".desktop__nav .room__slider-button--right");

const heroTitle = document.querySelector(".room__hero-title");
const heroDescription = document.querySelector(".room__hero-description");

let currentIndex = 0;

function updateHero(index){
    mobileImages.classList.add("fade");
    desktopImages.classList.add("fade");
    heroTitle.classList.add("fade");
    heroDescription.classList.add("fade");

    setTimeout(() => {
        if (mobileImages) mobileImages.srcset = mobileImage[index];
        if (desktopImages) desktopImages.src = desktopImage[index];
        if (heroTitle) heroTitle.textContent = heroTitles[index];
        if (heroDescription) heroDescription.textContent = heroDescriptions[index];

    mobileImages.classList.remove("fade");
    desktopImages.classList.remove("fade");
    heroTitle.classList.remove("fade");
    heroDescription.classList.remove("fade");
    }, 300)
};

// Previous mobile button
mobilePrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + mobileImage.length) % mobileImage.length;
    updateHero(currentIndex);
});

// Next mobile button
mobileNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % mobileImage.length;
    updateHero(currentIndex);
});

// Previous desktop button
desktopPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + desktopImage.length) % desktopImage.length;
    updateHero(currentIndex);
});

// Next desktop button
desktopNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % desktopImage.length;
    updateHero(currentIndex);
});

updateHero(currentIndex)

// Navigation section
const openMenu = document.querySelector(".room__hamburger-button");
const closeMenu = document.querySelector(".room__close-button");
const menu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".room__overlay");

openMenu.addEventListener("click", () => {
    menu.classList.toggle("toggle");
    overlay.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("toggle");
    overlay.classList.add("hidden");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
        menu.classList.remove("toggle");
        overlay.classList.add("hidden");
    });
});

