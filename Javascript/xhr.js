//// Créer une instance de XMLHttpRequest
let xhr = new XMLHttpRequest();

//// Configurer la requête
xhr. open ('GET', 'xhr.txt', true);
//// Gérer les événements liés à la requête

xhr.onload = function(){
if (xhr.status >= 200 && xhr.status < 300) {
//// La requête a réussi
//// Convertir la réponse JSON en objet JavaScript
let resultat = JSON.parse(xhr.responseText);
//// Afficher les données dans la page HTML
const resultatDiv = document.getElementById ('resultat');
resultatDiv.innerHTML = '<h2>Données récupérées : </h2>' +
                        '<p>Nom :' + resultat.nom + '</p>' +
                        '<p>Email' + resultat.email + '</p>';
} else {
//// La requête a échoué
console.error ('Erreur de requête : ' + xhr.status);
  }
};
xhr.onerror = function() {
console.error ('Erreur réseau');
};
//// Envoyer la requête
xhr.send ();