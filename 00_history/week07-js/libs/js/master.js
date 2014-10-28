var name = 'Marie';
var age = 22;
var speed = 1.3;

/* kommentar */
// function
var hallo = function( name ){
	alert('Hallo: '+name+'!');
};
// hallo('Peter');
// alert(name);

// Ansprechen von Elementen mit ID
// zufügen von Klasse
document.getElementById('wrap').classList.add('desktop');
// entfernen von Klasse
document.getElementById('wrap').classList.remove('mobile');