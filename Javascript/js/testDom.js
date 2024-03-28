function effacerDOM(dv) {
    if(dv != null){
        while (dv.hasChildNodes()) {
            let nf = dv.firstChild;
            dv.removeChild(nf);
        }
        // dv.parentElement.removeChild(dv);
    }
}

function remplacerTexte(elt,texte){
    if(elt != null){
    effacerDOM(elt);
    var nvxNoeud = document.createTextNode(texte);
    elt.appendChild(nvxNoeud);
    }
    }


    function getTexte(elt){
        let texte = "";
        if(elt != null){
        if(elt.hasChildNodes()){
        for(var i = 0; i < elt.childNodes.length; i++){
        var nf = elt.childNodes[i];
        if(nf.nodeValue != null){
        texte += nf.nodeValue;
         }else{
        texte += getTexte(nf);
         }
        }
        }
        }
        return texte;
    }


function effacerTitre() {
    let dv = document.getElementById("titre");
    if(dv != null){
        while (dv.hasChildNodes()) {
            let nf = dv.firstChild;
            dv.removeChild(nf);
        }
        dv.parentElement.removeChild(dv);
    }
}