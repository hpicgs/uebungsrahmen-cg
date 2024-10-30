# Übungen 3D-Computergrafik

## Aufsetzen des Übungsrahmens
Der Übungsrahmen wird für alle kommenden Übungsaufgaben verwendet und stellt z.B. Funktionalitäten für I/O und User Interface bereit. Der Übungsrahmen wurde unter Windows, Linux und MacOS getestet.

Folgende Schritte müssen durchlaufen werden, um den Übungsrahmen (einmalig) vorzubereiten. Falls ihr den Übungsrahmen bereits aus einer vorherigen Vorlesung aufgesetzt habt, solltet ihr trotzdem einen neuen Aufgabenordner initialisieren.

**1. Benötigte Software installieren.**
- Git installieren. Installationsanweisungen können [hier](https://git-scm.com/) gefunden werden. Git sollte danach über die Kommandozeile verfügbar sein (kann getestet werden, indem z.B. `git --version` in der Kommandozeile ausgeführt wird).
- Git LFS installieren (siehe [hier](https://git-lfs.com/)) und mit `git lfs install` in der Kommandozeile initialisieren. Man kann mit `git lfs -v` testen, ob die Installation erfolgreich war.
- Node installieren (siehe [hier](https://nodejs.org/en)). Es kann eine beliebige Version gewählt werden; von uns getestet sind die Versionen 14 bis 22. Node sollte danach in der Kommandozeile verfügbar sein (kann getestet werden, indem z.B. `npm -v` in der Kommandozeile ausgeführt wird).

**2. Übungsrahmen herunterladen**
Um den Code für den Übungsrahmen herunterzuladen, mit der Kommandozeile zum gewünschten Download-Ort navigieren und `git clone https://github.com/hpicgs/uebungsrahmen-cg` ausführen.

**3. Übungsrahmen aufsetzen**
Mit der Kommandozeile in den neuen Ordner wechseln (`cd ./uebungsrahmen-cg`) und die benötigten Node-Bibliotheken mittels `npm install --legacy-peer-deps` installieren.
Falls Node Version 14 genutzt wird, kann das Argument `--legacy-peer-deps` weggelassen werden.

**4. Aufgabenordner initialisieren**
Nun kann ein Ordner für die Übungen dieses Semesters vorbereitet werden.
Die folgenden Schritte können entweder im UI, oder über die Kommandozeile durchgeführt werden.

>***Initialisierung mittels UI:***
Das UI öffnen, indem in der Kommandozeile im "uebungsrahmen-cg"-Ordner `npm run ui` ausgeführt wird. Dann im "Initialize"-Tab die benötigten Informationen eintragen:
>  - Configuration name: *cg*
>  - Lecture title: *Computergrafik*
>  - Directory: Wähle einen beliebigen Ordner, in dem du die Übungsaufgaben bearbeiten willst
>  - Author ID 1/2: Eure Matrikelnummern
>  - Template: Wählt die `template.tar.gz`
>
> Anschließend auf den "Initialize"-Button klicken.

<div style="page-break-after: always;"></div>

>***Initialisierung mittels Kommandozeile***
>Folgenden Befehl im "uebungsrahmen-cg" Ordner ausführen:
>```sh
>./uebung.bat init \
>    --directory <working directory> \
>    --lecture "Computergrafik" \
>    --authors <matriculation number 1> <matriculation number 2> \
>    --template <path to template.tar.gz>
>```
>(Die Argumentwerte in eckigen Klammern müssen durch entsprechende Werte ersetzt werden. Als `directory` kann ein beliebiger Ordner gewählt werden, in dem die Übungsaufgaben aufgesetzt werden sollen.)

Falls an dieser Stelle kurz getestet werden soll, ob die Initialisierung geklappt hat, kann der Server entsprechend dem Punkt "Bearbeiten einer Übungsaufgabe" (siehe weiter unten) gestartet werden. Es sollte sich eine Website öffnen, die abgesehen von einigen hilfreichen Links leer sein sollte.

## Importieren einer Übungsaufgabe
Nachdem der Übungsrahmen aufgesetzt wurde, können Übungsaufgaben importiert werden. Dazu wird das entsprechende Archiv (eine .tgz Datei) in den Ordner `uebungsrahmen-cg/import` gelegt. Es wird immer diejenige Übung importiert, die zuletzt in den Import-Ordner gelegt wurde. Soll eine andere Übung importiert werden, muss der entsprechende Dateipfad angegeben werden.

>***Importieren mittels UI***
Ggf. den Dateipfad über "Import File or Directory" setzen. Dann im "Import"-Tab auf den "Import"-Button klicken.

>***Importieren mittels Kommandozeile***
Vom "uebungsrahmen-cg" Ordner aus folgenden Befehl aufrufen:
`./uebung.bat importAssignment` (ggf. mit zusätzlichen Argument `-i <file path>`).


## Bearbeiten einer Übungsaufgabe
Um eine Übungsaufgabe zu bearbeiten, muss zunächst der Server gestartet werden.

>***Starten des Servers mittels UI***
Im "Run Server"-Tab auf den "Start"-Button klicken. Wenn das Häkchen bei der Option "Open page in browser" gesetzt ist, öffnet sich die Website zur Bearbeitung der Übung.

>***Starten des Servers mittels Kommandozeile***
Vom "uebungsrahmen-cg" Ordner aus folgenden Befehl aufrufen: `./uebung.bat start`.

Anschließend öffnet sich die entsprechende Übersichtsseite, auf der alle importierten Übungen angezeigt werden.
Jede Aufgabenseite selber besteht aus einem Canvas, auf dem die Ergebnisse in Echtzeit dargestellt werden, sowie einer Aufgabenbeschreibung unter dem Canvas. In der Aufgabenbeschreibung sind die zu bearbeitenden Dateien verlinkt und können direkt in einem beliebigen Editor aufgerufen werden. Für Syntax-Highlighting können in Editoren oft entsprechende Plugins installiert werden (z.B. für [Shadercode in Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=slevesque.shader)).
Die zu bearbeitenden Abschnitte in den Dateien sind über entsprechende Kommentare markiert.

Wird die zu bearbeitende Datei gespeichert, updatet sich automatisch der Canvas und zeigt die Änderungen an. Sollte dies beim ersten Mal nicht funktionieren, sollte die Seite einmal neu geladen werden.

In der rechten oberen Ecke des Canvas befinden sich, je nach Übungsaufgabe, verschiedene Parameter, die durch Klick auf das "Controls"-Feld ausgeklappt werden können.

## Exportieren einer Übungsaufgabe
Sobald die Übung fertig bearbeitet wurde, kann sie als .tgz Archiv für die Korrektur exportiert werden.

>***Exportieren der Übung mittels UI***
Im "Export"-Tab der UI auf den "Export"-Button klicken und den Anweisungen folgen. Falls die Einstellungen nicht verändert werden, landet die exportierte Übung im Ordner `uebungsrahmen-cg/export`.

>***Exportieren der Übung mittels Kommandozeile***
Vom "uebungsrahmen" Ordner aus folgenden Befehl aufrufen: `./uebung.bat exportSubmission`. Die exportierte Übung landet im Ordner `uebungsrahmen-cg/export`.