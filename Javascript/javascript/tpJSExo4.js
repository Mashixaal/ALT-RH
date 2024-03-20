function changer(){
    let bd = document.getElementsByTagName('body');
    bd[0].classList.add('active');
    document.getElementById('btnChanger').classList.add('btnChanger');
}

function annulerStyle(){
    let bd = document.getElementsByTagName('body');
    bd[0].classList.remove('active');
    document.getElementById('btnChanger').style.borderRadius = "0%"
}

function remplacerImage(){
    let im = document.getElementById('tof');
    im.setAttribute('src', 'img/goju.png');
}

function revenirImage(){
    let im = document.getElementById('tof');
    im.setAttribute('src' , 'img/zoro.jpeg');
}