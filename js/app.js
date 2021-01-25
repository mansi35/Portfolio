const homeSec = document.getElementById("home-container");
const aboutSec = document.getElementById("about-container");
const expSec = document.getElementById("exp-container");
const projectSec = document.getElementById("project-container");
const certiSec = document.getElementById("certi-container");

const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const expBtn = document.getElementById("exp-btn");
const projectBtn = document.getElementById("project-btn");
const certiBtn = document.getElementById("certi-btn");

homeBtn.addEventListener("click", displayHome);
aboutBtn.addEventListener("click", displayAbout);
expBtn.addEventListener("click", displayExp);
projectBtn.addEventListener("click", displayProject);
certiBtn.addEventListener("click", displayCerti);

function hideAll() {
    homeSec.classList.add("d-md-none");
    aboutSec.classList.add("d-md-none");
    expSec.classList.add("d-md-none");
    projectSec.classList.add("d-md-none");
    certiSec.classList.add("d-md-none");

    homeBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    expBtn.classList.remove("active");
    projectBtn.classList.remove("active");
    certiBtn.classList.remove("active");
}

function displayHome() {
    hideAll();
    homeSec.classList.remove("d-md-none");
    homeBtn.classList.add("active");
}

function displayAbout() {
    hideAll();
    aboutSec.classList.remove("d-md-none");
    aboutBtn.classList.add("active");
}

function displayExp() {
    hideAll();
    expSec.classList.remove("d-md-none");
    expBtn.classList.add("active");
}

function displayProject() {
    hideAll();
    projectSec.classList.remove("d-md-none");
    projectBtn.classList.add("active");
}

function displayCerti() {
    hideAll();
    certiSec.classList.remove("d-md-none");
    certiBtn.classList.add("active");
}
