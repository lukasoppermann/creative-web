# JS

> JavaScript (auch JScript oder ECMAScript) wird genutzt um der mit HTML erstellten Struktur Interaktivität zu verleihen.

## Einbinden von JS-Dateien

Eine JS-Datei ist ein reines Textdokumente mit der Endung **.js**. Innerhalb einer Js-Datei müssen keine Angaben über die Art des Dokumentes gemacht werden, da alle Nötigen Informationen schon bei der Einbindung angegeben werden. 

Das Einbinden funktioniert mit dem <script>-Tag am ENDE des HTML-Dokumentes und muss das Attribute **src** besitzen welches pfad !!!!!!!!!!!! LINK!!!!! zu der JavaScript-Datei enthält. Das zweite Attribut ist **type** welches immer den Wert *text/javascript* enthält.
Dieses Attribut ist laut HTML5-Spezifikationen optional, sollte aber ggf. für einen weitreichenderen Support trotzdem genutzt werden.

<script type="text/javascript" src="/js/script.js"></script>

## Externe JS-Dateien vs. JavaScript im HTML-Code
Der Vorteil externer JS-Dateien gegenüber integrierten Styles ist vielfältig. Zum einen kann die gleiche Datei für mehrere HTML-Seite genutzt werden, was den Code übersichtlicher, die Erstellung einzelner Seiten einfacher und das Laden der Seite (durch Caching der JS-Datei) schneller macht. Hierzu ist es unabdingbar, dass die JS-Datei am ENDE der HTML-Seite (vor dem schließenden </body>-Element) geladen wird, da sonst das Rändern der Seite verzögert wird. 

Zum anderen ist die Pflege einer Seite so viel einfacher. Will man bspw. eine neue Funktion hinzufügen, so muss man dies nur in der JS-Datei anpassen und nicht in jeder HTML-Datei. Es sollten nur externe JS-Dateien genutzt werden, JS im HTML sowie Inline-JS (JS innerhalb der Tags) ist auf jeden Fall zu vermeiden.

# Kommentare

In JavaScript-Dateien können zwei verschiedene Arten von Kommentaren genutzt werden, einzeilig und mehrzeilige Kommentare.

// Kommentar über eine Zeile

/* Kommentar über
   mehrere
*/ Zeilen

# Konsole

Die in jeden modernen Browser eingebaute Konsole ermöglicht das leichte Arbeiten und Fehlerbegeben (debuggen) von JavaScript.
So kann mit console.log bspw. ein beliebet Werte in die Konsole ausgegeben werden.

console.log('Text');
console.log(variableName);
console.log(object);

In der Konsole kann auch vollwertiger JavaScript-Code ausgeführt werden. 

// setzt color für den ersten Hyperlink auf der Seite auf rote
document.getElementByTagName(a)[0].style.color = "red"; 

# Was ist eine variable?
Eine Variable ist vergleichbar mit einer Box die etwas enthält. Das etwas kann bei JavaScript Text (String), eine Zahl (Integer / Float), ein Objekt (Object/Array) oder eine Funktion (Function) sein.

Eine Variable wird mit dem Schlüsselwort **var** definiert.

var variablenName = "Text String";

Sobald eine Variable definiert wurde, kann diese durch eine einfache Zuweisen OHNE var verändert werden.

variablenName = "neuer Text String";

# Was ist ein String
Ein String ist eine reine Text-Variable diese kann Alphanumerische (A-Z, 0-1) Zeichen sowie Sonderzeichen enthalten. Da ein String immer in Anführungszeichen definiert wird, müssen Anführungszeichen innerhalb des Strings mit einen Slash "escaped" werden \".

var text = "Das ist ein Text."; 
console.log(text); // Ausgabe: Das is ein Text.

var copy = "Das ist \"Copy\"."; 
console.log(copy); // Ausgabe: Das ist "Copy".

Um mehrere Textelemente bzw. Variablen und Strings zu verbinden, wird das Plus genutzt.

var name = "Peter";
var copy = "Hallo: "+name+"!";
console.log(copy); // Ausgabe: Hallo: Peter!

# Was ist eine Zahlenvariable
Es gibt verschiedenen Typen von Zahlenvariablen die wichtigsten sind Integer bzw. Int (Ganzzahl) und Float (Fließkommazahl). Zahlen müssen immer OHNE Anführungszeichen definiert werden, da sie sonst als String gesehen werden und nicht mehr zum Rechnen genutzt werden können.

var int = 1;
console.log(int); // Ausgabe: 1

var float = 2.4;
console.log(float); // Ausgabe: 2.4

var int = 1;
console.log(int+float); // Ausgabe: 3.4

// Achtung String + Int/Float wird zum String

var float = 2.4;
console.log("User: "+int+float); // Ausgabe: User: 12.4

# Was ist ein Objekt
Ein ist eine Sammlung von Key-Value-Pairs (also Schlüssel-Wert-Paaren). Dabei Muss der Schlüssel immer vom Typ String sein, während der Wert ein String, eine Zahl, ein weiteres Objekt oder sogar eine Funktion sein kann. Objekte werden mit **{}** definiert.

var auto = {
  'schluessel' : 'Wert',
  'tueren' : 4,
  'farbe' : 'rot'
};

Die Ausgabe von Werten kann sowohl mit der Punkt-Notation als auch mit der Array-Notation (Anführungszeichen beachten!) erfolgen.

console.log(auto.tueren); // Ausgabe: 4
console.log(auto['farbe']); // Ausgabe: rot

Die Array-Notation sollte nur genutzt werden, sofern die Schlüssel Sonderzeichen, Leerzeichen oder Umlaute enthält. Im Allgemeinen sollten Schlüssel aber, sofern möglich, nur Kleinbuchstaben a-z enthalten sodass die Punkt-Notation genutzt werden kann.

## Objekte in Objekten
Objekte können Objekte enthalten (und diese wiederum Objekte), die definition ist wie folgt:

var auto = {
  'motor' : {
		'zylinder' : 8,
    'ps' : 200 
	},
  'farbe' : 'rot'
};

Um auf Werte des Objektes motor innerhalb des Objektes auto zuzugreifen können wieder die oben erwähnten Notationen genutzt werden.

console.log(auto.motor.zylinder); // Ausgabe: 8
console.log(auto['motor']['ps']); // Ausgabe: 200

## Funktionen in Objekten
Objekte können Funktionen enthalten, die definition ist wie folgt:

var auto = {
  'drive' : function( speed ){
		...
	},
  'farbe' : 'rot'
};

Um auf Werte des Objektes motor innerhalb des Objektes auto zuzugreifen können wieder die oben erwähnten Notationen genutzt werden.

auto.drive(300);
auto['drive'](300);

## Objekt vs. Array
In JavaScript gibt es keine wirklichen Arrays, sondern Array-Like Objekte. Der Unterschied zu normalen Objekt ist, dass die Schlüssel nicht manuell angegeben werden, sondern automatisch beginnend von 0 zugefügt werden. Arrays werden mit **[]** definiert und können genau wie Objekte jegliche Art von Variablen enthalten.

var arr = ['Apfel', 'Birne'];

Für die Ausgabe muss die Array-Notation genutzt werden, die Schlüssel sind allerdings Integer (beginnend von Null, also 0,1,2,...)

console.log(arr[0]); // Ausgabe: Apfel
console.log(arr[1]); // Ausgabe: Birne

Arrays haben bestimmte Vorteile und Nachteile gegenüber normalen Objekten. Im Allgemeinen sollten Arrays nur genutzt werden, wenn nicht gesondert auf ein einzelnes Element zugegriffen werden muss.

# Was ist eine Funktion?
Eine Funktion ist analog zu bspw. Logarithmus-Funktionen in der Mathematik eine vordefinierte Abfolge von Befehlen, welche mit bestimmten Parametern ausgeführt werden kann.
Eine Funktion wird im Normalfall einer Variable zugewiesen um die Funktion wieder aufrufen zu können. Bei der Definition einer Funktion werden Parameter festgelegt, welche beim Ausführen der Funktion angegeben werden und innerhalb der Funktion verfügbar sind.

var fnName = function( parameter1, parameter2 )
{
  // hier stehen die Befehle
};

Eine einfache Funktion, die einen Namen als Parameter entgegennimmt und eine Begrüßung in die Konsole schreibt wird wie folgt definiert. (Dabei ist console.log schon eine vordefinierte Funktion für sich).

var greet = function( name )
{
  console.log("Hello "+name);
}

Der Text, der beim Ausführen der Funktion übergeben wird, ist innerhalb der Funktion in der Variable name vorhanden. Ausgeführt wird die Funktion wie folgt:

greet("Mia"); // Ausgabe: Hello Mia

# Was ist Scope?
Scope (engl. Geltungsbereich) regelt die Verfügbarkeit von Variablen/Funktionen innerhalb von JavaScript. So ist bspw. eine global definierte Funktion überall verfügbar, eine Variable die innerhalb einer Funktion definiert wird, ist nur in selbiger verfügbar.

var fn = function( firstname )
{
  var age = 22;
  console.log(firstname +', '+age+'y');
}

fn('Mary'); // Ausgabe: Mary, 22y

console.log(firstname); 
// Ausgabe: ReferenceError: firstname is not defined
console.log(age);
// Ausgabe: ReferenceError: age is not defined

Innerhalb der Funktion fn sind die Variablen age und firstname definiert. 
Außerhalb der Funktion sind diese nicht mehr im Scope, daher erzeugt das console.log einen Fehler.

Eine Variable die außerhalb einer Funktion definiert wird ist in einem größeren Scope und somit auch in der Funktion verfügbar.

var age = 22;

var fn = function( firstname )
{
  console.log(firstname +', '+age+'y');
  age = 25;
}

console.log(age); // Ausgabe: 22
fn('Mary'); // Ausgabe: Mary, 22y
console.log(age); // Ausgabe: 25

Da age in einem umfassenden Scope definiert wurde kann diese Variable in einer Funktion geändert werden und diese Änderung ist dann auch außerhalb verfügbar. Diese Art des Austausches sollte vermieden werden, anstelle dessen werden Werte mit return zurückgegeben.

## Rückgabe aus einer Funktion mit return
Oft ist es nötig einen in einer Funktion erzeugten Wert wieder aus dieser Funktion und dem lokalen Scope der Funktion auszugeben. Das wird mit Schlüsselwort return bewerkstelligt. Der Ausgegebenen Wert kann einfach in einer Variable gespeichert werden.

var fn = function( name )
{
	return "Hello "+name;
}
var sayhello = fn("Eike");
console.log(sayhello); // Ausgabe: Hello Eike

Achtung, return kann immer nur einen Wert zurück geben. Das kann allerdings sowohl String, Integer, Float, Objekt und auch eine Funktion sein. Wenn also mehrere Strings zurückgegeben werden müssen, kann das über ein Objekt gelöst werden.

var fn = function( name )
{
	return {
		'name': name,
    'age': 22
	}
}
var person = fn("Eike");
console.log(person.name); // Ausgabe: Eike
console.log(person.age); // Ausgabe: 22

# If-Abfragen
If (engl. Falls) frage nach einer Bedingung, trifft diese zu, wird ein Code-Block ausgeführt.

var age = 12;
if( age < 20 )
{
	age = 20;
}
console.log(age); // Ausgabe: 20

Wenn die Bedingung nicht zugriff, wird der Code auch nicht ausgeführt.

var age = 22;
if( age < 20 )
{
	age = 20;
}
console.log(age); // Ausgabe: 22

## If ... Else
Oft soll entweder ein Code-Block ausgeführt werden oder ein anderer, dafür gibt es das Schlüsselwort Else, wenn also die Bedingung in der IF-Klammer nicht zutrifft wird immer der andere  Code-Block ausgeführt.

var age = 22;
if( age < 20 )
{
	age = 20;
}
else
{
	age = 30;
}
console.log(age); // Ausgabe: 30

## If ... Else if ... Else
Oft sollen mehrere Bedingungen geprüft werden dafür gibt es das Schlüsselwort else if( Bedingung ).

var age = 22;
if( age < 20 )
{
	age = 20;
}
else if( age < 24 )
{
	age = 25;
}
else if( age < 26 )
{
	age = 28;
}
else
{
	age = 30;
}
console.log(age); // Ausgabe: 25

Es können beliebig viele else if Anweisungen genutzt werden. Else ist optional und muss nicht verwendet werden. Beginnen muss aber jede anfrage mit if und sofern else genutzt wird, muss else am Ende stehen.

# Schleifen
Schleifen sind Konstrukte die einen bestimmten Code-Block solange wie die Bedingungen der Schleife zutrifft ausfuhrt.

## while
Eine While-Schleife nimmt eine Bedienung an und führt den Enthaltenen Code solange aus, wie diese Bedienung zutrifft.

var i = 0;
while( i < 10 )
{
  i++; // Kurzform um i um 1 zu erhöhen
	console.log(i);
}

// Ausgabe: 1 ... 10

Achtung, While-Schleifen können leicht in einen Endlosen Loop laufen, wenn die Bedienung nie zutreffen kann.

var i = 0;
while( 1 < 2 )
{
  i++; // Kurzform um i um 1 zu erhöhen
	console.log(i);
}

Da 1 < 2 immer zutrifft und kein Bestandteil der Bedienung verändert wird, endet die Schleife nie und bringt den Browser meist zum Absturz.

## Weitere Schleifen
Es gibt auch andere Schleifen wie for oder for in, diese sind allerdings kompliziertere Konstrukte und werde hier nicht erklärt. Weitere Infos dazu gibt es auf MDN.

For-Schleife https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

For...in-Schleife https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

# DOM-Manipulation
Eine der wichtigsten Aufgaben von JavaScript ist das bearbeiten des DOM-Trees also des Angezeigten HTML-Codes. Dafür ist es allerdings nötig gezielt ein Element auf der Seite anzusprechen, dafür gibt es verschiedenen Funktionen die in Browser implementiert wurden. Als Rückgabe erhält man meist in sogenannten Node.

## Body-Element auswählen
Am einfachsten ist es, das Body-Element auszuwählen:

document.body // Node des Body-Tags

## Element mit ID auswählen
Das document-Objekt besitzt die Funktion getElementById (Schreibweise mit Großbuchstaben beachten) um Elemente anhand der ID zu finden.

// HTML
<ul id="navi"> ... </ul>

// JS
document.getElementById('navi') // Node der ul#navi 

## Element mit Klasse auswählen
Das document-Objekt besitzt die Funktion getElementsByClassName (Schreibweise mit Großbuchstaben und s am ende von Elements beachten) um Elemente anhand der Klasse zu finden.

// HTML
<ul>
	<li class="list-item"> ... </li>
	<li class="list-item"> ... </li>
</ul>

// JS
document.getElementsByClassName('list-item') // Nodes der li.list-item

## Element mit komplexen Selektoren auswählen
Um komplexe Selektoren wie #navi .list-item zu nutzen gibt es document.querySelectorAll

// HTML
<ul id="navi">
	<li class="list-item"> ... </li>
	<li class="list-item"> ... </li>
</ul>

// JS
document.querySelectorAll('#navi .list-item') // Nodes der li.list-item innerhalb von der ul#navi


## Arbeiten mit Nodes
Node-Lists, also mehrere Nodes wie bspw. von document.getElementsByClassName oder document.querySelectorAll zurückgegeben bedürfen noch etwas Bearbeitung bevor einzelne Elemente bearbeitet werden können.

Im folgenden Beispiel wird mithilfe der classList-API eine klasse an bestimmte Elemente angefügt. Zu beachten ist hierbei der Support von classList. http://caniuse.com/classlist
Zum anfügen einer Klasse hat die classList-Api die Methode add, welche eine Klasse an ein Element anfügt.

Am einfachsten ist das mit document.getElementById und document.body, da hier immer nur ein Node zurückgegeben wird. Die Klasse new wird wie folgt angefügt.

document.getElementById('navi').classList.add('new');
document.body.classList.add('new');

Da eine Nodelist mehrere Elemente enthält funktioniert das nicht so einfach. Das bedeutet, dass wir mit einer for-Schleife durch alle Elemente in der Nodelist gehen müssen und die Klasse hinzufügen. 

// NodeList in variable myNodeList speichern
var myNodeList = document.getElementsByClassName('list-item');

// for-loop:
// 1. Variable i wird mit Wert 0 definier
// 2. Bedingung i < Länge von myNodeList (Anzahl der Nodes)
// 3. i wird um 1 erhöht

for (var i = 0; i < myNodeList.length; ++i) 
{
	// Auf NodeList-Items kann mit dem Index wie bei einem 
  // Array zugegriffen werden, also mit i, da diese immer
  // erhöht wird
	myNodeList[i].classList.add('new');
}

document.querySelectorAll Produziert eine NodeList, genau wie document.getElementsByClassName, somit kann auch hier wie oben vorgegangen werden.

# Richtiger Coding-Style

Ein guter Coding-Style ist zwar für das funktionieren des Codes nicht von Bedeutung, allerdings erleichtert es das finden von Fehler enorm. Durch einen ordentlichen und gleich bleibenden Stil ist es auch einfach sich im Code zurecht zu finden und die Hierarchien zu erkennen.

## Strict mode
Es ist zu empfehlen den *strict mode* zu aktivieren indem einfach folgendes an erster Stelle in der JS-Datei eingefügt wird.

// strict mode aktivieren
'use strict';

Dies bewirkt, dass einige gefährliche Funktionen von JavaScript deaktiviert werden. Wenn externe Libraries genutzt werden, sollte der strict mode innerhalb einer IIFE (Immediately-Invoked Function Expression, also eine sich sofort aufrufenden Funktion) angegeben werden, damit er "in scope" ist. 

(function(document, window)
{
  // strict mode aktivieren
  'use strict';
  // hier kommt der weitere JavaScript Code.
  ...
})(document, window, undefined);


## Einheitliches Einrückung
Code sollte immer gleich und nach Hierarchie eingerückt werden. Bspw. immer mit 2 Tabs.

Ein Abschnitt des JS-Codes sieht dann bspw. so aus:

var helloWorld = function( name )
{
	var hello = "Hello "+name+"!";
  // Ausgabe in die Konsole
	console.log(hello);
}


## var Schlüsselwort nutzen
Jede Variable muss immer mit dem **var** Schlüsselwort definiert werden. Nur so ist sie lokal und verschmutzt nicht den Global-Name-Space. Lokal bedeutet sie kann nicht außerhalb einer der Funktion bzw. des Scopes in welchem sie definiert wurde genutzt werden.

var variable = "text";

Soll eine Variable global, also überall verfügbar, sein so kann diese dem **window**-Element zugefügt werden.

var variable = "text";
// variable global verfügbar machen
window.variable = variable;

## Settings in config object
Wenn eine Funktion mit Konfigurationsmöglichkeiten geschrieben wird, sollten diese über ein Objekt definiert werden.

var opts = {
  'color' : '#223344',
  'speed' : '200'
};

var fn = function(param, opts)
{
  ...
}


# Fehler finden und beheben

Es ist leicht bei der JavaScript-Programmierung Fehler zu machen und vor allem am Anfang passiert das sehr oft. Das Resultat ist meist eine Fehlermeldung in der Konsole mit einer Zeilenangabe und der betroffenen Datei. Der Fehler tritt im Normalfall innerhalb von ca. 3 Zeilen um diese Angabe auf, wenn eine Funktion den Fehler auslöst kann sich dieser allerdings auch an der Stelle befinden, an der diese Funktion definiert wird.

# JS Linting Tools
Wenn ein Fehler auftritt und nicht klar ist wo das Problem liegt, sollte als erstes ein JS Lifting Tool wie bspw. JSHint.com http://www.jshint.com/ genutzt werden. Die angezeigten Fehler helfen meist das Problem zu lösen.

# Auskommentieren

Sofern man überhaupt keine Idee hat wo der Fehler liegen könnten und auch das Lifting Tool nicht hilft, kann man anfangen Teile des Codes auszukommentieren, d.h. den Code mit Kommentar-Zeichen zu umgeben, damit dieser temporär deaktiviert ist. Funktioniert der Rest dann, muss der Fehler innerhalb des auskommentierten Bereiches liegen.

var text = "text";

/* hier beginnt das kommentar
var fn = function({ 
	...
}
und hier endet es */

var test = "test";


## Stackoverflow / Communities

Programmierer sind im allgemeinen recht hilfsbereite Menschen und so gibt es einige gute Foren in denen man Hilfe für Probleme bekommen kann. Eine der besten Communities ist definitiv Stackoverflow.com (englisch). Oft hilft schon eine Suche, da hier wirklich viele Fragen und Antworten vorhanden sind.

## Häufige Fehler

**Falscher Verbindungsoperator**

Mehrere Text- und Variablenelement werden mit dem **+** verbunden. Wird keines oder ein falsches Zeichen benutzt führt das zu Fehlern

/* falsch verknüpfte Texte */
var text = "Text "variable;
var text2 = "Text ".variable;
var text3 = "Text "&variable;
var text4 = "Text " variable;

/* richtig verknüpfte Texte */
var text = "Text "+variable;

**Fehlende oder falsche Anführungszeichen**

Textevariablen (Strings) müssen mit Anführungszeichen definiert werden.

/* Falsch */
var text = Hallo Welt!;
var text = "Hallo Welt!';

/* Richtig */
var text = "Hallo Welt!";

## Regel-Klammer ist nicht richtig geschlossen

Die schließende oder öffnende Klammer wurde vergessen oder ist falsch herum.

/* schließende Klammer falsch herum */
var fn = function(){
	...
{

/* doppelte Klammer, keine Klammer */
var fn = function(){{
	...
}
var fn2 = function()
	...
}

/* richtig wäre */
var fn = function(){
	...
}

## Frameworks
Es gibt viele JavaScript Frameworks wie bspw. jQuery http://jquery.com/ oder auch minifiedjs http://minifiedjs.com/ die das Arbeiten mit JavaScript vereinfachen. Diese sind vor allem sehr hilfreich, wenn ältere Browser unterstützt werden müssen.
