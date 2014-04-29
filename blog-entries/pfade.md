# Der richtige Pfade

Wenn eine Datei verlinkt werden soll, bspw. ein Bild, CSS-Dokument, JavaScript-Dokument oder eine weitere HTML-Seite muss der korrekte Pfad angegeben werden, dabei gibt es zwei Möglichkeiten, absolute und relative Pfade,

> Absolute Pfade geben den absolute spezifischen Pfad an, währende relative Pfade in Relation zu dem Ausgangspunkt stehen.

# Absolute Pfade

Ein absoluter Pfad ist vergleichbar mit der Aussage 

> Ich bin in meinem Auto in Berlin.

Der Pfad ist hier *Berlin > Auto > Ich*. D.h., egal von wo der Suchende beginnt, findet er mich. 
Übertragen aufs web wäre _Berlin_ eine Domain, bspw. _https://octodex.github.com_. _Auto_ ist der Ordner _images_ und _Ich_ ist die Datei _daftpunktocat-thomas.gif_. Der gesamte Absolute Pfad ist somit https://octodex.github.com/images/daftpunktocat-thomas.gif. 
Wenn ich von meiner _index.html_ auf diesen Pfad verweise wird die Datei angezeigt, solange sie in dem Ordner Images unter der Domain _https://octodex.github.com_ liegt. Wo sich meine index.html Datei befindet ist egal.

# Relative Pfade

Ein relativer ist in unserem Beispiel die Aussage.

> Ich bin in meinem Auto.

Hier ist der Pfad *Auto > Ich* dieses Aussage ist korrekt solange ich in meinem Auto bin, ob mein Auto in Berlin oder Hamburg steht ist in diesem Fall egal, solange der Suchende im selben Ort wie ich ist.
Übertragen aufs unser Beispiel wäre dieser Pfad _./images/daftpunktocat-thomas.gif_.
Wenn ich von meiner _index.html_ auf diesen Pfad verweise wird die Datei angezeigt, solange sie in dem Ordner _images_ auf der selben Domain wie meine Datei _index.html_ liegt. Und der Ordner _images_ im selben Ordner wie meine _index.html_ liegt. Ob sich meine Dateien auf octodex.github.com oder einer anderen Domain befinden ist egal, solange bei auf derselben domain liegen, also relative zueinander sind.


# Syntax für relative Pfade
Absolute Pfade sind einfach, im Grunde nur eine Domain, bei relative Pfaden gibt es allerdings Besonderheiten.

## Startpunkt
Relative Pfade sind immer relative zu der Datei von der aus auf eine Datei verwiesen wird. Wenn meine Datei also im Ordner _website_ liegt, so verweist **./** auf diesen Ordner. Somit verweist **./bear.png** auf die Datei _bear.png_ im Ordner _website_.

## In Unterordner verweisen
Um von dem momentane Ordner _website_ in den Unterordner _bilder_ zu verweisen, wird der für Domains typische Slash **/**
genutzt. Der relative Pfad zu diesem Ordner ist also **website/bilder/**.

## In übergeordnete Ordner verweisen
Um von dem aktuellen Ordner in einen höheren Ordner zu gelangen wird **../** genutzt. Um also in der _index.html_ die sich im Ordner _website_ befindet in den Ordner _praese_ zu gelangen der auf der gleichen Ebene wie _website_ liegt, wird folgender relativer Pfad genutzt: **../praese/**. Diese Notation kann auch mehrfach verwendet werden um mehrere Ordner höher in der Hierarchie zu gelangen, bspw. **../../projecte/**

# Zusammenfassung

**Absolute Pfade** beginnen mit der Domain und funktionieren nur solange nichts an dem Ort an welchem die Datei liegt, geändert wird.

**Relative Pfade** beschreiben einen Pfad ausgehend von dem Ordner in welche die Datei liegt von der aus auf eine andere Datei verwiesen wird. Sofern ein komplettes Ordnerkonstrukt verschoben wird (bspw. wenn eine Webseite via FTP auf einen Server geladen wird) funktionieren diese Pfade weiterhin-

Ein Pfade welcher mit einem Slash beginnt geht von dem aktuellen Ordner aus bspw. **/unterordner**

Ein Pfade der mit einem **./** beginnt, startet aus dem Root-Verzeichnis also der höchsten Hierarchie bspw. **./unterverzeichnis**

Ein Pfad der mit einem oder mehreren **../** beginnt startet einen bzw. mehrere Ordner über dem aktuellen Ordner bspw. **../../verzeichnis**