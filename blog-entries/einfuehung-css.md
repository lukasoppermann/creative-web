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

Es ist leicht bei der HTML-Programmierung Fehler zu machen und vor allem am Anfang passiert das auch sehr oft. Das Resultat ist meist eine komplett weiße Seite und somit leider wenig hilfreich. Allerdings gibt es einige gute Möglichkeiten Fehler schnell zu finden und oft begangene Fehler auf die man achten kann.

## Techniken zur Fehlersuche

**HTML Validator**
Wenn etwas mit der Seite nicht stimmt bzw. einer der im Folgenden beschriebenen Umstände (leere Seite, falsche Styles, etc.) eintritt, sollte als erstes der HTML-Validator genutzt werden.

Ein Validator ist ein Tool, welches den Syntax (Code) prüft und Fehler ausgibt. Dafür gibt es den offiziellen Validator des W3C http://validator.w3.org/#validate_by_input. Leider sind die Fehlermeldungen teilweise etwas Kryptisch, meistens kann man aber davon ausgehen, dass der Fehler zwischen der 5 Zellen vor der angegebenen Zeile und 5 Zeilen danach auftritt (bspw. wenn Zeile 12 angegeben ist, liegt der Fehler meist zwischen Zeile 7 und 17). 

Anfänglich sind Validatoren etwas umständlich, mit etwas Gewöhnung kann man so aber schnell den Fehler finden.

**Auskommentieren**

Sofern man überhaupt keine Idee hat wo der Fehler liegen könnten und auch der Validator nicht hilft, kann man anfangen Teile des Codes auszukommentieren, d.h. den Code mit Kommentar-Zeichen zu umgeben, damit dieser temporär deaktiviert ist. Funktioniert der Rest dann, muss der Fehler innerhalb des auskommentierten Bereiches liegen.

<div>...</div>

<!-- hier beginnt das kommentar
<div< ... </div>
und hier endet es -→

<p>...</p>

**Typische Fehler suchen**


kommt nach letztem Selektor

#id, class,{

}





Oft findet man auch schnell selbst einen der unten aufgeführten Fehler. Wenn ihr nach jeder Änderung kurz testet, ob die Seite noch funktioniert, wisst ihr ja sobald ein Fehler auftritt, dass es mit der letzen Änderung zusammen hängt. Der Fehler lässt sich somit oft schnell auffinden. 
Das falsche schließen von Tags kann auch gut mithilfe der *Suchen und ersetzen* Funktion gefunden werden. ersetzt einfach alle **<** durch **<** (also dasselbe Zeichen) und alle **>** durch **>**. Die Anzahl der Ersetzung wir bspw. in Textmate angezeigt und sollte identisch sein.

**Stackoverflow / Communities**

Programmierer sind im allgemeinen recht hilfsbereite Menschen und so gibt es einige gute Foren in denen man Hilfe für Probleme bekommen kann. Eine der besten Communities ist definitiv Stackoverflow.com (englisch). Oft hilft schon eine Suche, da hier wirklich viele Fragen und Antworten vorhanden sind.

## Häufige Fehler

**Tag ist nicht geschlossen**

Das äußert sich zumeist indem der Style falsch ist oder auf einmal ein sehr großer Bereich ein Link oder eine Überschrift ist. Zumeist wurde das schließen Tag entweder ganz vergessen oder enthält keinen Slash.

<h1> Title <!-- hier fehlt eine </h1>-Element -->
<p>Das hier wird nun auch als Überschrift dargestellt.</p>

<h2>Überschrift<h2> <!-- hier fehlt eine / in dem h2-Element -->
<p>Das hier wird nun auch als Überschrift dargestellt.</p>

**Tag-Klammer ist nicht geschlossen**

Dieser Fehler äußert sich meist, indem die komplette Seite und auch der Quelltext leer ist.

<!-- schließender h1-Tag ist falsch, da < anstatt > am Ende -->
<h1> Title </h1<   

<!-- Richtig wäre </h1> -->
<h1> Title </h1>

**Falsche Reihenfolge beim Schließen von Elementen**

Dieser Fehler zeigt sich meist indem die Styles falsch dargestellt werden. Hier würde sowohl _Überschrift_ als auch _Copy Text_ als Headline dargestellt werden.

<h1>Überschrift
<p>Copy Text</p></h1>

**Falsche Anführungszeichen**

Bei Attributen vergisst man oft die Anführungszeichen komplett, oder an einer stelle.
Dieser Fehler zeigt sich meist indem die komplette Seite und auch der Quelltext leer ist, da ein Parse-Error (Fehler beim Aufbereiten des Dokumentes durch den Browser) auftritt.

<!-- Gar keine Anführungszeichen -->
<a href=http://www.google.de>Google</a>

<!-- Anführungszeichen nur auf einer Seite -->
<img src="image.jpg />

<!-- Doppelte Anführungszeichen auf einer Seite -->
<div class="class-name"">...

<!— Falsche (typografische) Anführungszeichen -->
<div class=”class-name„>…
<div class=«class-name»>…
