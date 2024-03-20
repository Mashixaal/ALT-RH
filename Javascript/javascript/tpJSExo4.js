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