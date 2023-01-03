/** 
@author: DION FIACRE ARMEL
@description: L'exercice consiste a demander a un utilisateur de saisir des données séparés par des virgules,
              puis le consigné dans un tableau et l'afficher dans un format précis.
@param: i:variable
@returns: resultat, resultat1
*/

/* ================= DAYLING CHALLENGE ================= */


//Tranformer Chaine de Caracteres en Tableau

let saisir = prompt("Veuillez entrer des mots séparés par des virgules");
let TableauSaisir = saisir.split(",");
console.log(TableauSaisir);


// Affivher le schema a partir de l'appel de fonctions


let LongueurSaisir = 0;
for (let choix of TableauSaisir){
    
    let SaisirLength = choix.length;
    if(SaisirLength > LongueurSaisir){
        LongueurSaisir = SaisirLength;
    }

}

let CaractereLong = LongueurSaisir + 4;

function DebutLinge(){
    let ligne = "";
    for (let pas = 0; pas < CaractereLong; pas++) {
        ligne = ligne + "*";
      }
      console.log(ligne);
}

function FinLinge(){
    let ligne = "";
    for (let pas = 0; pas < CaractereLong; pas++) {
        ligne = ligne + "*";
      }
      console.log(ligne);
}




let Espace = " ";
let RepeterEspace ="";
RepeterEspace = parseInt(RepeterEspace);
let NombreEspace = "";
NombreEspace = parseInt(NombreEspace);


function CreerLingeIntermediaire(){
    let ligne1 = "";
    let LigneIntermediaire="";
    for (let choix1 of TableauSaisir) {
        RepeterEspace = CaractereLong - choix1.length - 3;
        NombreEspace = Espace.repeat(RepeterEspace);
        ligne1 = "* ";
        LigneIntermediaire = ligne1 + choix1 + NombreEspace + "*";
        console.log(LigneIntermediaire);
      }
      
}

//Affichage des Fonctions

let PremiereLigne =DebutLinge();
console.log(PremiereLigne);

let Intermediaire =CreerLingeIntermediaire();
console.log(Intermediaire);

let DerniereLigne =FinLinge();
console.log(DerniereLigne);