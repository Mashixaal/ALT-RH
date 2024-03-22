// let depart = 0;
// let fin = depart+3;

// for (let j = 0; j < depart; j++) {
//     // gérer le fin
//     for (let i = depart; i < fin; i++) {
//         document.write(
//             'div class= "" '
//         )
//     }

document.write(`
<div class="jumbotron text-center">
<h1>Le trombi des stars</h1>
</div>`);



let j = 0;
let lastPos = 0;

// rajouter une condition si pour ne pas depasser 75
for (let i = 0; i < 26; i++) {

  document.write('<div class="row">')
  for (j = lastPos ; j < lastPos+3; j++) {
    document.write('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center photo">')
    //ne pas afficher un <p> mais une balise <img> avec l'attribut src="monchemin/image-"
    //concatenction avec j 
    document.write(`<p> image grande ${j}</p>`)
    document.write("</div>");
    //si j < 48 alors 
    document.write('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center photo">');
    document.write('<p> image petite ' + j + '</p>')
    document.write("</div>");
    //fin si 

  }

  lastPos = j
  document.write("</div>")
}
