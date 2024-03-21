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




