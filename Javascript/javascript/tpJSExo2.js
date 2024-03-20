function factorielle(n){ // n: paramètre forme1

    let f = 1; // f = f * i;
    let i = 1;
    while (i <= n) {
        f *= i;
        i++;
    }
    resultat.innerHTML = f;
    return f;
}
// factorielle(7); // 7 paramètre effectif
function sommefactorielle(n){
    let s = 0; 
    for (let i = 1; i <= n; i++) {
        s += factorielle(i);
        
    }
    somFact.innerHTML = s;
}

