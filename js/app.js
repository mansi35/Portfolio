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
const check = document.getElementById("check");
const skills = document.getElementById("skills");

homeBtn.addEventListener("click", displayHome);
aboutBtn.addEventListener("click", displayAbout);
expBtn.addEventListener("click", displayExp);
projectBtn.addEventListener("click", displayProject);
certiBtn.addEventListener("click", displayCerti);
check.addEventListener("click", hideSkills);

function hideAll() {
    homeSec.classList.add("d-none");
    aboutSec.classList.add("d-none");
    expSec.classList.add("d-none");
    projectSec.classList.add("d-none");
    certiSec.classList.add("d-none");

    homeBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    expBtn.classList.remove("active");
    projectBtn.classList.remove("active");
    certiBtn.classList.remove("active");
}

function displayHome() {
    hideAll();
    homeSec.classList.remove("d-none");
    homeBtn.classList.add("active");
}

function displayAbout() {
    hideAll();
    aboutSec.classList.remove("d-none");
    aboutBtn.classList.add("active");
}

function displayExp() {
    hideAll();
    expSec.classList.remove("d-none");
    expBtn.classList.add("active");
}

function displayProject() {
    hideAll();
    projectSec.classList.remove("d-none");
    projectBtn.classList.add("active");
}

function displayCerti() {
    hideAll();
    certiSec.classList.remove("d-none");
    certiBtn.classList.add("active");
}

function hideSkills() {
    if (skills.classList.contains("d-none")) {
        skills.classList.remove("d-none");
    }
    else {
        skills.classList.add("d-none");
    }
}
