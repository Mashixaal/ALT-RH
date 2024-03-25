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

let position  = 1;
let nb_images = 4;
function descend () {
  let idnaruto   = 'img'+position;
  position++;
  if (position>nb_images) {
    position = 1;
  }
  let idsuiv = 'img'+position;
  document.getElementById(idnaruto).src = document.getElementById(idsuiv).src;
  document.getElementById(idsuiv).src = 'Imag/naruto.png';
}


function monte () {
  let idnaruto   = 'img'+position;
  position--;
  if (position<1) {
    position = nb_images;
  }
  let idprec = 'img'+position;
  document.getElementById(idnaruto).src = document.getElementById(idprec).src;
  document.getElementById(idprec).src = 'Image/luffy5.jpg';}