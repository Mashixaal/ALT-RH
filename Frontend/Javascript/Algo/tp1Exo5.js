let x = parseInt(prompt("choisie une valeur "));
let a = prompt("choisir le type d'operation " );
let y = parseInt(prompt("choisie une valeur "));

if(a=== "+"){
    alert(x+y)
}else{
    if(a=== "-"){
        alert(x-y)
    }else{
        if(a=== "*"){
            alert(x*y)
        }else{
            if(a=== "/"){
                if(y!=0){
                    alert(x/y)
                }else{
                    alert("impossible de divise par 0")
                }
            }else{
                alert("operateur inexistant")
            }
        }
    }
}