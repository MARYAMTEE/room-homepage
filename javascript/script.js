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

const mobileImages = document.querySelector(".room__hero-mobile");
const desktopImages = document.querySelector(".room__hero-desktop");
const mobilePrev = document.querySelector(".mobile__nav .room__slider-button--left");
const mobileNext = document.querySelector(".mobile__nav .room__slider-button--right");

const desktopPrev = document.querySelector(".desktop__nav .room__slider-button--left");
const desktopNext = document.querySelector(".desktop__nav .room__slider-button--right");

let currentMobileIndex = 0;
let currentDesktopIndex = 0;

// Previous mobile button
mobilePrev.addEventListener("click", () => {
    currentMobileIndex = (currentMobileIndex -1 + mobileImage.length) % mobileImage.length;
    mobileImages.srcset = mobileImage[currentMobileIndex];
});

// Next mobile button
mobileNext.addEventListener("click", () => {
    currentMobileIndex = (currentMobileIndex + 1) % mobileImage.length;
    mobileImages.srcset = mobileImage[currentMobileIndex];
});

// Previous desktop button
desktopPrev.addEventListener("click", () => {
    currentDesktopIndex = (currentDesktopIndex - 1 + desktopImage.length) % desktopImage.length;
    desktopImages.src = desktopImage[currentDesktopIndex];
});

// Next desktop button
desktopNext.addEventListener("click", () => {
    currentDesktopIndex = (currentDesktopIndex + 1) % desktopImage.length;
    desktopImages.src = desktopImage[currentDesktopIndex];
});