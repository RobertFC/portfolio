const menu = document.querySelector(".menu");
const menuList = document.querySelector("nav>ul");
const [...navList] = document.querySelectorAll("nav li");
const [...everythingButNav] = document.querySelectorAll("body>*:not(header)");
const blurAll = document.querySelector("#blurAll");
let dynamicText = document.querySelector("#dynamicText");


window.addEventListener("resize", changeMenuEvents);
menu.addEventListener("click", toggleHidden);
blurAll.addEventListener("click", removeShow)

function changeMenuEvents() {
    if (!window.matchMedia("(min-width: 1000px)").matches) {
        for (let item of navList) {
            if (item.id !== 'switchContainer') {
                item.addEventListener("click", toggleHidden);
            }
        }
    }
    else {
        for (let item of navList) {
            item.removeEventListener("click", toggleHidden)
        }
    }
}

function toggleHidden() {
    menuList.classList.toggle("hidden");
    menuList.classList.toggle("show");
    blurAll.classList.toggle("blur");
}

function removeShow(){
    menuList.classList.add("hidden");
    menuList.classList.remove("show");
    blurAll.classList.remove("blur");
}

let word,
    reset,
    interval;


function deleteChar() {
    dynamicText.textContent = dynamicText.textContent.slice(0, -1)

    if (dynamicText.textContent.length === 0) {
        clearInterval(interval);
        if (reset) start();
        else {
            reset = true;
            word = "Software Engineer";
            interval = setInterval(writeChar, 100);
        }
    }
}

function writeChar() {
    if (word.length !== 0) {
        dynamicText.textContent += word[0];
        word = word.slice(1);
    }
    else {
        clearInterval(interval);
        setTimeout(() => {
            interval = setInterval(deleteChar, 50);
        }, 1500)
    }
}

function start() {
    word = "Full Stack";
    reset = false;
    interval = setInterval(writeChar, 100);
}

changeMenuEvents()
start()

window.addEventListener('resize', () => {
   removeShow();
});