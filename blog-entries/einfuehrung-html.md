# Einführung in HTML

HyperText Markup Language (HTML) wird genutzt um die Struktur eine Webseite zu definieren.

## Grundlagen

Ein HTML-Dokument (.html) ist in zwei Abschnitte geteilt, den **head** und **body**.

Im **head** werden Metadaten festgelegt und externe CSS-Dateien (Cascading Style Sheets zum definieren des Designs) verknüpft. Vergleichbar mit den Gehirn, welches Metadaten über uns, wie die Muttersprache, etc. enthält und den Augen, die für das Visuelle (Design) verantwortlich sind.

Der **body** beschreibt die sichtbaren Elemente (Tags), vergleichbar mit Extremitäten (Arme, Beine, etc.) am Körper.

## Grundgerüst eines HTML-Dokumentes

```
<!DOCTYPE html>
<html>

<!-- Kommentar: Inhalt des HTML-Dokuments -->

</html>
```

Jedes HTML-Dokument beginnt mit deinem Dokumenten-Typ (DOCTYPE). Dieses Element liefert dem Browser Informationen über die HTML-Version die für das erstellen des Dokumentes genutzt wird, sodass der Browser das Dokument korrekt lesen, verstehen und anzeigen (Parsen und Rendern) kann. Ab HTML-Version 5 (HTML5) wird die vereinfachte Version `<!DOCTYPE html>` genutzt.
Das DOCTYPE-Element muss immer in der ersten Zeile des Dokumentes stehen.

Nach dem DOCTYPE folgt sogleich das <html>-Element, welches den gesamten Inhalt umspannt. 

Element in HTML können selbstschließenden Element wie bspw. das <img/>-Element sein oder eine öffnendes (<elementen name>) und eine schließendes (</elementen name> mit einem / gekennzeichnet) Element besitzen wie bspw. das <html>-Element. Welches Element zu welcher Kategorie gehört muss man lernen bzw. nachschlagen.

In der zweiten Zeile des HTML-Dokumentes folgt also das öffnende <html>-Element und in der letzten Zeile zeigt das schließende </html> das Ende des Dokumentes an.

Innerhalb des <html>-Elementes befindet sich das <head> und das <body>-Element

```
<!DOCTYPE html>
<html>

  <head>
  <!-- Im HEAD sind Metadaten und Verknüpfungen zu CSS-Dateien -->
  </head>

  <body>
  <!-- Im BODY sind alle sichtbaren HTML-Elemente -->
  </body>

</html>
```

## HTML-Tags im BODY

In den **Body** können nun HTML-Elemente eingefügt werden um Inhalte zu strukturieren. Überschriften werden mit <h>-Tags von der wichtigsten Überschrift <h1></h1> (sollte nur einmalig pro HTML-Dokument vorkommen) zu den weniger wichtigen Überschriften <h2> bis <h5> definiert.
Fließtext kann bspw. in eine <p>-Element (Paragraph-Tag) definiert werden.

```
<!DOCTYPE html>
<html>

  <head>
  <!-- Im HEAD sind Metadaten und Verknüpfungen zu CSS-Dateien -->
  </head>

  <body>

		<h1>Meine Website</h1>
		<p>Das hier ist ein Paragraph.</p>

		<h2>Sekundäre Überschrift</h2>
		<p>Hier steht noch mehr.</p>

  </body>

</html>
```

Weitere wichtige HTML-Element sind <div>, <ul> und <li>, <span>, <a> sowie <img>. Eine Übersicht an verfügbaren HTML-Elementen gibt es auf **[mdn](https://developer.mozilla.org/de/docs/HTML/HTML5/HTML5_element_list)**

## Metatags im Head

Im **head** werden verschiedenste Metadaten angegeben. In jedem HTML-Dokument sollte die Zeichen-Kodierung angegeben werden, da es sonst zu Darstellungsfehlern bei Sonderzeichen, etc. kommen kann. UTF-8 ist die momentan beste Kodierung.

````
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
```

Des weiteren sollte die Sprache in der die Webseite angelegt ist bspw. *en* für Englisch oder *de* für Deutsch und der Author der Seite angegeben werden.

```
	<meta name="language" content="en" />
	<meta name="author" content="Lukas Oppermann – vea.re" />
```

Mithilfe des Robots-Metatag kann den Suchmaschinen mitgeteilt werden, wie mit der Seite umzugehen ist. Der erste Wert kann entweder *index* oder *noindex* sein, wobei *index* bedeutet, dass die Seite in das Verzeichnis der Suchmaschine aufgenommen wird und *noindex*, dass die Seite nicht in den Index kommt. Eine Normale Webseite sollte somit den werde *index* bekommen.
Der zweite Wert kann *follow* oder *nofollow* sein. Dieser teilt der Suchmaschine mit, ob diese Links auf der Webseite aufrufen soll oder nicht. Im Normalfall sollte *follow* angegeben werden, da so alle weiteren Unterseiten der Webseite in das Verzeichnis der Suchmaschine aufgenommen werden.

```
	<meta name="robots" content="index,follow" />
```

Das Description-Element wird, wenn es gut geschrieben ist, in Suchmaschinen unter dem Titel der Seite angezeigt. Hierbei sollte beachtet werden, dass nicht mehr als 150 Zeichen genutzt werden sollten und mögliche relevante Keywords in der Beschreibung verwendet werden müssen. Es sollte sich um einen für Menschen lesbaren Text handeln, muss aber nicht dem normalen Satzbau entsprechen. *Lukas Oppermann - Interface & Interaction design, corporate design, information graphics. Berlin* ist okay, da es lesbar ist, aber die wichtigen Schlüsselworte (Hier Namen und die Design-Leistung) enthält. Für Suchmaschinen Optimierung (SEO – Search Engine Optimization) ist ein guter Description-Text förderlich.

```
	<meta name="description" content="150 Zeichen Beschreibung mit Keywords" />
```

Das <title>-Element ist eines, wenn nicht DAS wichtigste Element für die Suchmaschinen Optimierung. Der Title sollte nicht über 55 Zeichen lang sein und wichtige Schlüsselworte, aber auch den Title der Seite, bspw. *About* oder *Portfolio* enthalten. Der Title wird im Browser in der Titel-Leiste angezeigt, ist aber auch der Name, der beim Speichern in den Favoriten genutzt wird.

```
	<title>Lukas Oppermann - Interface & Interaction design</title>
```

Mit dem <link>-Element können externe CSS-Dateien eingebunden werden. Der Vorteil externer CSS-Dateien gegenüber integrierten Styles ist vielfältig. Zum einen kann die gleiche Datei für mehrere HTML-Seite genutzt werden, was den Code übersichtlicher, die Erstellung einzelner Seiten einfacher und das Laden der Seite (durch Caching der CSS-Datei) schneller macht. Zum anderen ist die Pflege einer Seite so viel einfacher. Will man bspw. die Link-Farbe ändern, so muss man dies nur in der CSS-Datei anpassen und nicht in jeder HTML-Datei. Es sollten nur externe CSS-Dateien genutzt werden, Style-Code im Head-Bereich sowie Inline-CSS (CSS innerhalb der Tags) ist auf jeden Fall zu vermeiden.

Das Link-Element (nicht zu verwechseln mit dem Anchor-Element für Hyperlinks zu anderen Seiten) ist ein selbstschließendes Element und muss 4 Attribute besitzen, **media** welches den Wert *print* oder *screen* besitzt. Eine mit *print* beschriebene CSS-Datei wird nur in dem Moment genutzt in welchem der Nutzer eine Seite ausdruckt. Mit *screen* gekennzeichnete CSS-Dateien werden für die Darstellung auf sämtlichen Bildschirmen, egal ob PC oder Smartphone genutzt. 
Das wichtigste Attribut ist **href** (für hyperlink reference) welches den Pfad zur CSS-Datei angibt.
Die letzten zwei Attribute **type** und **rel** beschreiben die Art des Dokumentes und den Anwendungsfall. Hier muss zwangsweise *type="text/css"* und *rel="stylesheet"* gesetzt werden.

```
	<link media="screen" href="/css/master.css" type="text/css" rel="stylesheet">
```

## Listen, Bilder und Strukturen

Sowohl für Aufzählungen als auch bspw. für Menüs werden meist **Listen** genutzt. Hierbei gibt es zwei Typen von Listen, die Ordered-List (<ol></ol>, geordneter Liste) welche von die Elemente eine Ordnungszahl (1., 2., ...) anfügt und die Unordered-List (<ul></ul>, ungeordnete Liste) welche nur einen Punkt (•) vor die Listen-Elemente stellt. Innerhalt einer Liste, egal welchen Types, werden Listen-Elemente mit <li>Inhalte</li> (List item) definiert.

<ul id="menu">
	<li class="menu-item">Home</li>
	<li class="menu-item">About</li>
	<li class="menu-item">Contact</li>
</ul>


Bilder werden mit dem selbstschließenden <img/>-Tag eingefügt. Das src-Attribut (source = Quelle) ist das wichtigste Attribut und gibt den Pfad zur Bild-Datei an.
Außerdem braucht jedes Bild ein alt-Text (alternative Text) welcher angezeigt wird, wenn das Bild nicht geladen werden kann (je nach Browser) und sowohl für Screenreader (Geräte zum Lesen von Webseiten für Menschen mit Sehbehinderung) als auch Suchmaschinen wichtiger Inhalt ist, da Bilder nicht dargestellt / gelesen werden können.

<img src="./media/polar-bear.jpg" alt="Eisbär baut Iglu" />

Das <div>-Element


## Seiten verknüpfen

Webseiten sind im Grunde verknüpfte (verlinkte) Einzelseiten, also HTML-Dokumente die mithilfe von Hyperlinks verknüpft sind. Das dafür zu nutzende Element ist der **<a>**-Tag (a kommt von Anchor = Anker). Das <a>-Tag hat einen öffnenden <a> und einen schließenden </a> Teil zwischen welchen sich der klickbare Inhalt (Text oder Bild, kann teilweise auch weitere Elemente umschließen) befindet. Das zweite wichtige Attribut ist das **href**-Attribut, welches genau wie beim weiter oben beschriebenen <link>-Tag den Pfad zu dem zu ladenden Dokument angibt. Hierbei kann sowohl eine Domain (bspw. http://www.google.de) verlinkt werden, als auch ein Dokument (bspw. ./about.html = about.html Dokument im gleichen Ordner wie die aktuelle Datei aus welcher verlinkt wird).

Das **Title**-Attribut ist optional und beinhaltet einen Text der als Tool-Tip bei angezeigt wird, wenn sich die Maus über dem Link befindet. Dies ist nützlich wenn eine genauere Beschreibung für den Link nötig ist. Im allgemeinen sollte der Link-Text aber schon so aussagekräftig sein, das ein Titel-Attribut nicht nötig ist. Das ist sowohl vorteilhaft für SEO als auch für Touch-gesteuerte Geräte, da hier der Titel nicht angezeigt wird.

Ein weiteres interessantes Attribut ist das **Target**-Attribut. Dieses gibt an, ob das Verknüpfte Dokument in einem neuen Fenster geladen werden soll. Das ist bspw. sinnvoll, wenn auf eine andere Webseite verlinkt wird. Um den Link in einem neuen Fenster anzuzeigen wird dem Target-Element der Wert *_blank* (mit Unterstrich am Anfang) zugewiesen. Soll das Dokument im gleichen Fenster geöffnet werden, wird das Target-Element nicht aufgeführt.

<a href="http://www.google.de" title="Beschreibungstext auf hover" target="_blank">Klickbarer Link-Text</a>

<a href="./about.html" title="Beschreibungstext auf hover" ><strong>Fetter, klickbarer Link-Text</strong></a>

# Fehler finden und beheben
