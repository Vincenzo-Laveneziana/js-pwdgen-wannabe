
//chiedere all’utente il suo nome e poi memorizzarlo
var nome=prompt("Inserisci il tuo nome")
console.log(nome);

//chiedere poi il suo cognome e memorizzarlo
var cognome=prompt("Inserisci il tuo cognome")
console.log(cognome);

//Visualizza nome e cognome in h3

document.getElementById("utente").innerHTML="Hello "+ nome +" "+ cognome + "!!!";

//chiedere poi il suo colore preferito e memorizzarlo

var colore=prompt("Inserisci il tuo colore preferito")
console.log(colore);

//inserisco variabile dichiarata
var intero= 20;

//in fine scrivere nella pagina le informazioni ottenuti dall’utente, nel formato: 

document.getElementById("visualizza").innerHTML= nome + cognome + colore + intero;