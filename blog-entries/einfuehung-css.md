# CSS

> CSS (Cascading Style Sheets) werden genutzt um die mit HTML erstellte Struktur zu gestalten.

# Richtiger Coding-Style

Ein guter Coding-Style ist zwar für das funktionieren des Codes nicht von Bedeutung, allerdings erleichtert es das finden von Fehler enorm. Durch einen ordentlichen und gleich bleibenden Stil ist es auch einfach sich im Code zurecht zu finden und die Hierarchien zu erkennen.

**Einheitliches Einrückung**
Code sollte immer gleich und nach Hierarchie eingerückt werden. Bspw. immer mit 2 Tabs.

Für CSS gibt es eine einfache art der Formatierung

/* Selektoren & schließende Klammer sind auf Level 0 */
Selector{
	/* Attribute und Werte sind auf Level 1 */
	color: red;
	border-width: 2px;
}


**Neue Zeile für jedes Attribut**
Jedes Attribut samt dazugehörigen Werte kommt auf eine neue Zeile. Sowohl der Selektor als auch die schließende Klammer stehen jeweils auf einer eigenen Zeile. Die öffnete Klammer steht direkt hinter dem Selektor.


Selector{ /* Selektor und öffnende Klammer */
	color: red; /* Attribute und Werte */
	border-width: 2px; /* Attribute und Werte +/
} /* Schließende Klammer */


**Mehrere Selektoren in einer Regel**
Wenn mehrere Selektoren genutzt werden gibt es zwei Arten dies zu formatieren. sind die Selektoren kurz und nur wenige, so werden diese mit Kommata und einem darauf folgenden Leerzeichen getrennt. Sind die Selektoren allerdings sehr lang, so wird pro Selektor eine Zeile genutzt, das Komma steht ohne folgendes Leerzeichen am Ende der Zeile.

/* kurze Selektoren */
#id, .class, .class element{
	...
}

/* lange Selektoren */
.class .class-2.class-3:hover, 
.class .class-2.class-4:hover,
.class .class-2.class-5:hover{
	...
}


**Doppelte Anführungszeichen nutzen**
Für die alle Attributswerte, die Klammern benötigen werden doppelte Klammern verwendet.

Selektor{
	font-family: "Helvetica Neue";
}



# Fehler finden und beheben

Es ist leicht bei der CSS-Programmierung Fehler zu machen und vor allem am Anfang passiert das sehr oft. Das Resultat ist meist eine komplett weiße Seite oder dass ein Großteil der Styles nicht angezeigt werden. Allerdings gibt es einige gute Möglichkeiten Fehler schnell zu finden und oft begangene Fehler auf die man achten kann.

## Techniken zur Fehlersuche

**CSS Validator**
Wenn etwas mit der Seite nicht stimmt bzw. einer der im Folgenden beschriebenen Umstände (leere Seite, falsche Styles, etc.) eintritt, sollte als erstes der CSS-Validator genutzt werden.

Ein Validator ist ein Tool, welches den Syntax (Code) prüft und Fehler ausgibt. Dafür gibt es den offiziellen Validator des W3C http://jigsaw.w3.org/css-validator/#validate_by_input. Leider sind die Fehlermeldungen teilweise etwas Kryptisch, meistens kann man aber davon ausgehen, dass der Fehler zwischen der 5 Zellen vor der angegebenen Zeile und 5 Zeilen danach auftritt (bspw. wenn Zeile 12 angegeben ist, liegt der Fehler meist zwischen Zeile 7 und 17). 

Anfänglich sind Validatoren etwas umständlich, mit ein wenig Gewöhnung kann man damit aber schnell den Fehler finden.

**Auskommentieren**

Sofern man überhaupt keine Idee hat wo der Fehler liegen könnten und auch der Validator nicht hilft, kann man anfangen Teile des Codes auszukommentieren, d.h. den Code mit Kommentar-Zeichen zu umgeben, damit dieser temporär deaktiviert ist. Funktioniert der Rest dann, muss der Fehler innerhalb des auskommentierten Bereiches liegen.

#page{
	...
}

/* hier beginnt das kommentar
#.fehler{
	...
}
und hier endet es */

.item{
	...
}


## Typische Fehler suchen

Oft lohnt sich ein Kurzer Blick und man findet selbst einen der unten aufgeführten Fehler. Wenn man nach jeder Änderung kurz testet, ob die Seite noch funktioniert, ist klar, sobald ein Fehler auftritt, dass es mit der letzen Änderung zusammen hängt.

Das falsche schließen von Tags kann auch gut mithilfe der *Suchen und ersetzen* Funktion gefunden werden. Ersetzt einfach alle **{** durch **{** (also dasselbe Zeichen) und alle **}** durch **}**. Die Anzahl der Ersetzung wir bspw. in Textmate angezeigt und sollte identisch sein.

**Stackoverflow / Communities**

Programmierer sind im allgemeinen recht hilfsbereite Menschen und so gibt es einige gute Foren in denen man Hilfe für Probleme bekommen kann. Eine der besten Communities ist definitiv Stackoverflow.com (englisch). Oft hilft schon eine Suche, da hier wirklich viele Fragen und Antworten vorhanden sind.

## Häufige Fehler

**Kommata nach dem letzten Selektor**

Mehrere Selektoren werden mit Kommata getrennt, folgt allerdings fälschlicher Weise ein Komma nach dem letzten Selektor, wird die Regel fehlerhaft.

/* falsch verknüpfte Selektoren, da Komma vor { */
#id, .class,{
	...
}
/* richtig, ohne Komma vor { */
#id, .class{
	...
}

**Falscher Typ-Indikator**

Elemente haben keinen Indikator, Klassen den Punkt, IDs die Raute und Pseudoelemente einen Doppelpunkt. Wenn diese Zeichen verwechselt werden, kann das gesuchte Elemente nicht gefunden werden und der Style wird nicht angewandt.

/* index.html */
<p class="message">Hallo!</p>

/* style.css als ID markiert */
#message{
	color: red;
}

/* style.css richtig als Klasse markiert */
.message{
	color: red;
}

**Regel-Klammer ist nicht richtig geschlossen**

Die schließende oder öffnende Klammer einer CSS Regel wurde vergessen oder ist falsch herum.
Dieser Fehler äußert sich meist, indem viele Styles nicht mehr angewandt werden.

/* schließende Klammer falsch herum */
.class{
	...
{

/* richtig wäre */
.class{
	...
}

/* andere Fehler: doppelte Klammer, keine Klammer */
.class{{
	...
}
.class
	...
}

**Falsche Anführungszeichen**

Nur wenige Werte in CSS brauchen Anführungszeichen, bei diesen können aber einige Fehler auftreten.

/* Gar keine Anführungszeichen (kann zu Fehlern führen) */
font-family: Helvetica Neue

/* Anführungszeichen nur auf einer Seite */
font-family: "Helvetica Neue

/* Doppelte / verschiedene Anführungszeichen auf einer Seite */
font-family: "Helvetica Neue""
font-family: "Helvetica Neue'

/* Falsche (typografische) Anführungszeichen */
font-family: ”Helvetica Neue„
font-family: «Helvetica Neue»
