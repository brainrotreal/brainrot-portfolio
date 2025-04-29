const title = document.querySelector("#title");
const description = document.querySelector("#description");
const video = document.querySelector("#video");
const vidDescription = document.querySelector("#vid-description");
const back = document.querySelector("button");

const urlParams = new URLSearchParams(window.location.search);
const titleParam = urlParams.get("title");
const descriptionParam = urlParams.get("description");
const projectidParam = urlParams.get("projectid");

title.textContent = titleParam.replace(/-/g, " ");
description.textContent = descriptionParam.replace(/-/g, " ");
video.src = `../vid/vid${projectidParam}.mp4`;

fetch(`../txt/${projectidParam}.txt`)
    .then(response => response.text())
    .then(data => vidDescription.innerHTML = data);

back.addEventListener("click", () => {
    window.location.href = "../index.html";
});

