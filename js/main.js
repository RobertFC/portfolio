const menu = document.querySelector(".menu");
const menuList = document.querySelector("nav>ul");
const [...navList] = document.querySelectorAll("nav li");
let dynamicText = document.querySelector("#dynamicText");


window.addEventListener("resize", changeMenuEvents)

function changeMenuEvents(){
    if (!window.matchMedia("(min-width: 1000px)").matches){
        for (item of navList){
            item.addEventListener("click", toggleHidden);
        }
    }
    else{
        for (item of navList){
            item.removeEventListener("click", toggleHidden)
        }
    }
}

function toggleHidden(){
    menuList.classList.toggle("hidden");
    menuList.classList.toggle("show");
}


menu.addEventListener("click", toggleHidden);




let web,
software,
alternate,
interval;


function deleteChar(){
    dynamicText.textContent = dynamicText.textContent.slice(0,-1)

    if (dynamicText.textContent.length === 0){
        clearInterval(interval);
        if (alternate) start();
        else {
            alternate = true;
            interval = setInterval(writeChar, 100);
        }
    }
}

function writeChar(){

    if (alternate){
        if (software.length !== 0){
            dynamicText.textContent += software[0];
            software = software.slice(1);
        }
        else{
            clearInterval(interval);
            setTimeout(() => {
                interval = setInterval(deleteChar, 50);
            }, 1500)
        }
    }
    else{
        if (web.length !== 0){
            dynamicText.textContent += web[0];
            web = web.slice(1);
        }
        else{
            clearInterval(interval);
            setTimeout(() => {
                interval = setInterval(deleteChar, 50);
            }, 1500)
        }
    }


}

function start(){
    web = "Web Developer";
    software = "Software Engineer";
    alternate = false;
    interval = setInterval(writeChar, 100);
    

}

changeMenuEvents()
start()