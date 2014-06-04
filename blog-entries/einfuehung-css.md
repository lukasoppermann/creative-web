# CSS

> CSS (Cascading Style Sheets) werden genutzt um die mit HTML erstellte Struktur zu gestalten.

# Grundlagen

## Einbinden von CSS-Dateien

Eine CSS-Datei ist ein reines Textdokumente mit der Endung **.css**. Innerhalb einer CSS-Datei müssen keine Angaben über die Art des Dokumentes gemacht werden, da alle Nötigen Informationen schon bei der Einbindung angegeben werden.

Das Einbinden funktioniert mit dem <link>-Tag, dieser muss 4 Attribute besitzen, **media** welches den Wert *print* oder *screen* besitzt. Eine mit *print* beschriebene CSS-Datei wird nur in dem Moment genutzt in welchem der Nutzer eine Seite ausdruckt. Mit *screen* gekennzeichnete CSS-Dateien werden für die Darstellung auf sämtlichen Bildschirmen, egal ob PC oder Smartphone genutzt. 
Das wichtigste Attribut ist **href** (für hyperlink reference) welches den Pfad zur CSS-Datei angibt.
Die letzten zwei Attribute **type** und **rel** beschreiben die Art des Dokumentes und den Anwendungsfall. Hier muss zwangsweise *type="text/css"* und *rel="stylesheet"* gesetzt werden.

```
	<link media="screen" href="/css/master.css" type="text/css" rel="stylesheet">
```

**Externe CSS-Dateien vs. Styles im header**
Der Vorteil externer CSS-Dateien gegenüber integrierten Styles ist vielfältig. Zum einen kann die gleiche Datei für mehrere HTML-Seite genutzt werden, was den Code übersichtlicher, die Erstellung einzelner Seiten einfacher und das Laden der Seite (durch Caching der CSS-Datei) schneller macht. Zum anderen ist die Pflege einer Seite so viel einfacher. Will man bspw. die Link-Farbe ändern, so muss man dies nur in der CSS-Datei anpassen und nicht in jeder HTML-Datei. Es sollten nur externe CSS-Dateien genutzt werden, Style-Code im Head-Bereich sowie Inline-CSS (CSS innerhalb der Tags) ist auf jeden Fall zu vermeiden.

## Was ist eine Regel?

In einer CSS-Datei werden die Visuellen Eigenschaften von HTML-Elementen definiert. Diese Elemente werden zuvor mit einem Selektor ausgewählt, dieses Konstrukt bezeichnet man als eine Regel.

Selektor{
	Eigenschaft: Wert;
}

#### Eigenschaften 
Beschreiben etwa die Schriftfarbe *color* oder die Rundung der Ecken *border-radius*. Jede Eigenschaft hat einen spezifischen Namen in US-Englisch welcher zwangsweise korrekt geschrieben werden muss. Ein Übersicht der Eigenschaften ist auf MDN zu finden.

#### Werte
Werte in CSS sind sehr vielfältig, Zahlenwerte wie Schrieftgröße *font-size* oder breite *width* können bspw. in Pixel, Prozent, EM oder REM angegeben werden oder die Zahl 0 (ohne Einheit) zugewiesen bekommen. Farben können als Name *red*, Hexwert *#223300*, rgb/rgba Wert *rgba(200,100,100,0.5)* und einen weiteren Farbsystemen angegeben werden.

#### Selektoren
Sind Suchschemata um im HTML-Code Elemente zu finden auf die dann die Regel angewandt wird. Sofern ein Selektor mehrere Elemente anspricht, wird die Regel auf alle Elemente angewandt. Es gibt verschiedene Möglichkeiten Elemente anzusprechen, die gebräuchlichsten sind die folgenden.

##### Elementen-Selektor
Ein Element bspw. eine Liste <ul> kann einfach mit dem Elementen-Tag angesprochen werden.

// HTML:
<ul>
  <li>...</li>
</ul>

// CSS:

ul{
	...
}

##### Klassen-Selektor
Wurde einem (oder mehreren) Element eine Klasse über das class-Attribut zugewiesen kann dieses mithilfe eines class-selectors angesprochen werden. Ein mit einem Punkt beginnender Selektor wird von CSS als class-selector interpretiert.

// HTML:
<ul>
  <li class="list-item">...</li>
  <li class="list-item">...</li>
</ul>

// CSS:

.list-item{
	...
}

##### ID-Selektor
Wurde einem Element eine ID (eine ID kann pro Seite nur ein einziges Mal verwendet werden) über das ID-Attribut zugewiesen kann dieses mithilfe eines id-selectors angesprochen werden. Ein mit einer Raute (#) beginnender Selektor wird von CSS als id-selector interpretiert. 

// HTML:
<ul id="list">
  <li>...</li>
</ul>

// CSS:

#list{
	...
}

##### IDs vs. Klassen
Sowohl IDs als auch Klassen haben ihre Vor- und Nachteile. IDs haben den Nachteil, dass sie nur ein einziges Mal pro Seite vorkommen können. Das bildet allerdings auch ihre Stärker, da sie dadurch sehr performant werden da der Browser sobald er ein Element mit einer ID gefunden hat aufhört zu suchen. Dies ist vor allem bei JavaScript, welches auch mittels Selektoren funktioniert bedeutend. IDs sollten somit nur für Elemente genutzt werden die ein einziges Mal vorkommen, wie bspw. ein Logo oder eine Navigation. Klassen hingegen können mehrfach vorkommen und sollten für Elemente verwendet werden wie bspw. Links oder Menüpunkte. Der Vorteil hierbei ist, dass eine CSS-Regel nur ein einziges Mal geschrieben werden muss, aber auf alle Elemente mit einer bestimmten Klasse angewandt wird.

##### Pseudo-Selektoren
In CSS gibt es sogenannte Pseudo-Selektoren oder auch Pseudo-Klassen. Der Name kommt daher, dass diese kein gesetztes Attribut eines Elementes wie eine ID ansprechen, sondern einen Zustand oder eine Gegebenheit. Die wohl am häufigsten gebrauchte Pseudo-Klasse ist :hover, welche eine Element nur dann anspricht, wenn sich der Mauszeiger des Nutzer über diesem Element befindet (bspw. um den Stil eines Links zu ändern, wenn man mit der Maus darüber geht).

##### Komplexe Selektoren
Es ist möglich und auch oft nötig, die oben genannten Selektoren zu kombinieren und so Komplexe Suchschemata zu erzeugen.

So kann ein Element genauer spezifiziert indem mehrere zutreffende Selektoren genutzt werden. **Zu beachten ist, dass hier keine Leerzeichen zwischen den Selektoren genutzt werden dürfen**

// Element und Klasse, sinnvoll wenn eine Klasse auf mehrere Elemente gleichzeitig zutreffen kann.
a.active{
  ...
}
// mehrere Klassen
.list-item.active{
  ...
}

Um ein Element innerhalb eines anderen Elementes zu finden, kann man Selektoren mit Leerzeichen kombinieren. Jedes Leerzeichen bewirkt die Suche nach einem Unterelement.

// HTML
<ul class="list">
	<li class="list-item">...</li>
</ul>

// CSS um <li> mit der Klasse list-item zu finden
.list .list-item{
  ...
}

# Gewicht einer Regel
Wenn mehrere Regeln die selben Eigenschaften eines Elementes beeinflussen muss der Browser entscheiden welchen Wert die Eigenschaft schlussendlich haben muss. Dafür gibt es zwei Kriterien: **Position** und **Gewicht**.

## Position 
Einfach gesagt, die letzte Angabe wird genutzt. D.h. wenn zwei Regeln auf ein Element wirken und das gleiche Gewicht haben und beide die Eigenschaft *color* beschreiben, wird die Angabe der letzten Regel genutzt.

// HTML
<p class="text copy">Lorem ...</p>

// CSS
.text{
  color: red;
}
.copy{
  color: blue;
}
// Der Text ist Blau

p{
  font-size: 12px;
	font-size: 1em;
}
// Die Schriftgröße ist 1em

## Gewicht
Das Gewicht eine Regel hängt von der Anzahl und Art der Selektoren ab. Eine Klasse *.copy* ist schwerer als ein Element *p*. Eine ID #logo ist schwerer als eine Klasse und somit auch schwerer als ein Element. 

Der Faktor Gewicht ist stärker als die Position, d.h., dass eine "schwerere" Regel auch dann angewandt wird, wenn Sie früher im CSS vorkommt als eine "leichtere" Regel.

Weitere Infos dazu gibt es bei Star Wars http://www.stuffandnonsense.co.uk/archives/images/specificitywars-05v2.jpg

# CSS Attribute
Es gibt eine große Anzahl an CSS-Attributen, viele davon sind aus der CSS1 oder CSS2 Spezifikation wie color, background-color oder border und werden von allen Browsern unterstützt. Einige spannende Attribute sind allerdings aus der CSS3 Spezifikation und werden somit nur von aktuellen Browsern unterstützt, das sind bspw. border-radius, text-shadow oder box-shadow. Solange die hauptsächliche Zielgruppe in der Browsergruppe liegt, die CSS3 unterstützen oder wenn in älteren Browsern durch die Fehlende Unterstützung die Funktionalität der Seite nicht beeinträchtigt wird, können und sollten CSS3-Attribute problemlos genutzt werden. Eine Übersicht über den Browser-Support findet man auf caniuse.com.

## Vendor-prefix
Viele Browser die auf caniuse.com CSS3 unterstützen haben in der ecke einen Vermerk wie bspw. -moz oder -webkit. Das ist ein Vendor-prefix, der entsprechend des Namens vor das Attribut oder den Wert gestellt wird. So muss das Attribut box-sizing mit jeweils einem Vendor-prefix versehen werden um auch in älteren Versionen von Firefox und Webkit basierten Browsern (bspw. Safari und ältere Chrome-Versionen) unterstützt zu werden.
Das den standards entsprechende Attribut ohne Prefix sollte immer an letzter stelle stehen.

-moz-box-sizing: border-box; 
-webkit-box-sizing: border-box; 
box-sizing: border-box;

Ein Vendor-prefix ist somit eine Markierung eines Browserherstellers (Vendors), dass bestimmte Attribute in einer noch nicht finalen Version integriert wurden. Die Idee ist, dass sowohl alte als auch neuere Versionen des Attributes unterstützt werden können, wenn sich der Syntax der Implementierung ändern und dieser Syntax dann ohne Prefix eingebaut wird. Da die meisten Browser allerdings sowieso die W3C-Standards implementieren ist diese vorgehen eigentlich sinnfrei, sodass die meisten Browserhersteller in den neueren Versionen und bei der Implementierung neuer Attribute keine Präfixe mehr nutzen.


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
