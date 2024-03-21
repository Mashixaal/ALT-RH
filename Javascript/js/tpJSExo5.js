let i = 1; // naruto

function permeter(){
    let x = document.getElementById("img");
    if (i == 1){
        x.setAttribute("src", "img/naruto.png");
        i = 2;
    } else {
        x.setAttribute("src", "img/zoro.jpeg");
        i = 1; // zoro
    }
}

let y = setInterval("permeter()", 2000);

function arreter(){
   clearInterval(y)
   y = null;
}

function reprendre(){
    let x = document.getElementById("img");
    if (i == 1){
        x.setAttribute("src", "img/naruto.png");
        i = 2;
    } else {
        x.setAttribute("src", "img/zoro.jpeg");
        i = 1; // zoro
    }
}

// Diaporama 

let t = ["goju.png","naruto.png","zoro.jpeg"];
let j = 0;
let n = document.getElementById('diapo');
function suivant() {
    j++;
    if(j == t.length){
        j = 0;
    }
    n.src = "img/" + t[j]; // y.setAttribute("src","img/"+t[j]);
}
function precedent(){
    j--;
    if (j < 0){
        j = t.length - 1;
}
    n.src = "img/" + t[j]; // y.setAttribute("src","img/"+t[j]);
}

