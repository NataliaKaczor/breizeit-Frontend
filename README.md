# 🥕 Babybrei – Webanwendung für die Beikostzeit

Babybrei ist eine Webanwendung, die Eltern bei der Vorbereitung und Gestaltung der Beikostzeit unterstützen soll.
Die Anwendung ermöglicht es, verschiedene Lebensmittel zu verwalten und daraus eigene Brei-Rezepte zusammenzustellen.
Dabei können zu den Lebensmitteln unter anderem Altersempfehlungen, Allergene sowie Vitamine und weitere Nährstoffe hinterlegt werden.

## ✨ Allgemeine Infos

Die Webanwendung besteht aus einem Angular-Frontend, einem Node.js-Backend und einer MongoDB-Datenbank.

Im Mittelpunkt stehen 3 Bereiche:

### 🏠 Startseite

Die Startseite dient als Einstieg in die Anwendung.
Von der Startseite aus kann direkt zu den wichtigsten Bereichen navigiert werden:

### 🥕 Lebensmittel

Lebensmittel können angelegt, angezeigt sowie über ein Formular bearbeitet und gelöscht werden.
Beim Absenden des Formulars werden wichtige Eingaben überprüft. Außerdem wird verhindert, dass ein bereits vorhandenes Lebensmittel erneut angelegt wird.

In der Lebensmittelübersicht werden die gespeicherten Lebensmittel angezeigt.

Zu jedem Lebensmittel können verschiedene Informationen gespeichert werden.
Dazu gehören:

* Name
* Kategorie
* Altersempfehlung
* Allergen
* Vitamine (und Nährstoffe)
* Beschreibung
* Bild

> **Hinweis:** Bei den Vitaminen und Nährstoffen können beispielsweise Vitamin A, Vitamin C, Eisen oder Omega 3 ausgewählt werden. Diese Informationen werden später für die Zutatenempfehlungen bei den Brei-Rezepten verwendet.

### 🥣 Brei-Rezepte

Im Bereich Brei-Rezepte können eigene Rezepte erstellt und angezeigt werden.

Ein Brei-Rezept besteht aus:

* Rezeptname
* Altersempfehlung
* Zutaten
* Mengen
* Einheiten
* Beschreibung (= Zubereitungsbeschreibung)

Die Zutaten werden aus den bereits gespeicherten Lebensmitteln ausgewählt.

### ➕ Brei-Rezept hinzufügen

Beim Erstellen eines neuen Rezeptes werden zunächst der Name und die Altersempfehlung angegeben.

Anschließend können mehrere Lebensmittel als Zutaten ausgewählt werden.

Für jede Zutat werden folgende Angaben gespeichert:

* Lebensmittel
* Menge
* Einheit (g, ml, Stück)

Nach dem Hinzufügen wird die Zutat direkt im Formular angezeigt.
Dadurch können mehrere Zutaten nacheinander zu einem Rezept hinzugefügt werden.

Außerdem wird, wenn ein eisenhaltiges Lebensmittel als Zutat ausgewählt wird, automatisch auf maximal 2 Lebensmittel mit Vitamin C hingewiesen. Denn Vitamin C kann die Aufnahme von Eisen unterstützen.

Die Empfehlungen entstehen automatisch anhand der in der Datenbank hinterlegten Nährstoffinformationen und der im Rezept verwendeten Zutaten.

Zum Abschluss kann eine Beschreibung der Zubereitung eingegeben werden.

### 🔗 Verknüpfung zwischen Lebensmitteln und Rezepten

Die Zutaten eines Brei-Rezeptes werden mit bereits vorhandenen Lebensmitteln aus der Datenbank verknüpft.

Im Backend wird dafür die MongoDB-ID des jeweiligen Lebensmittels gespeichert.

Beim Abrufen eines Rezeptes werden die zugehörigen Lebensmittel mit `populate()` geladen.

Dadurch können beispielsweise Name und Bild des verwendeten Lebensmittels direkt beim Rezept angezeigt werden sowie die Vitamine (und Nährstoffe) für die Empfehlung verwendet werden.

### 📱 Responsive Design

Anschließend wurde die Anwendung für verschiedene Bildschirmgrößen über CSS Media Queries responsiv gestaltet.

Berücksichtigt werden:

* Desktop
* Tablet
* Smartphone

## 🛠️ Technologien

Technologien, die für die Entwicklung der Anwendung verwendet wurden:

* Angular 21.2.19
* TypeScript
* HTML
* CSS
* Node.js 24.1.0
* Express
* MongoDB
* Mongoose
* Fetch API
* Angular Router
* Bootstrap
* GitHub

## 📋 Voraussetzungen

Voraussetzungen, die für die lokale Ausführung benötigt werden:

* Node.js
* npm
* Angular CLI
* MongoDB
* Git

## 📥 Installation

### Repository klonen

**Frontend:**

```bash
git clone https://github.com/NataliaKaczor/breizeit-Frontend.git
```

**Backend:**

```bash
git clone https://github.com/NataliaKaczor/breizeit-Backend.git
```

### Frontend einrichten

In den Frontend-Ordner wechseln:

```bash
cd breizeit-Frontend
```

Abhängigkeiten installieren:

```bash
npm install
```

Angular-Anwendung starten:

```bash
ng serve
```

Das Frontend ist anschließend unter folgender Adresse erreichbar:

```text
http://localhost:4200
```

### Backend einrichten

In den Backend-Ordner wechseln:

```bash
cd breizeit-Backend
```

Abhängigkeiten installieren:

```bash
npm install
```

Backend starten:

```bash
node --watch server.js
```

## 📁 Projektstruktur

Die wichtigsten Bereiche des Angular-Frontends sind:

```text
src
└── app
    ├── home
    ├── lebensmittel-form
    ├── lebensmittel-liste
    ├── lebensmittel-ansicht
    ├── brei-rezepte
    ├── shared
    │   ├── backend.ts
    │   └── breirezept-backend.ts
    ├── interfaces
    │   ├── lebensmittel.ts
    │   └── brei-rezept.ts
    └── app.routes.ts
```

## 🤖 KI-Werkzeuge

Während der Entwicklung wurden KI-Werkzeuge unterstützend eingesetzt.

**Verwendete KI-Werkzeuge:**

* ChatGPT
* HTW ChatKI

Die KI-Werkzeuge wurden unter anderem angewendet für:

* Unterstützung bei Fehlermeldungen und technischen Problemen, zum Beispiel beim Aktualisieren eines bereits vorhandenen Lebensmittels. Dabei wurde als mögliche Lösung die Verwendung von `ChangeDetectorRef` vorgeschlagen.
* Unterstützung bei Problemen mit der Darstellung von Bildern, insbesondere bei der Unterscheidung zwischen Bildern aus dem `assets`-Ordner und hochgeladenen Bildern aus dem Backend-`uploads`-Ordner.
* Unterstützung bei HTML und CSS.
* Unterstützung bei der Entwicklung von Backend-Anfragen, vor allem bei der Verknüpfung der bereits vorhandenen Lebensmittel mit den Zutaten der Brei-Rezepte.
* Unterstützung bei der Erstellung der README.

Die vorgeschlagenen Lösungen wurden an das eigene Projekt angepasst und anschließend selbst umgesetzt und getestet.

## 🚀 Künftige Erweiterungen

Für die weitere Entwicklung sind beispielsweise folgende Funktionen möglich:

* passende Lebensmittel kombinieren bei Erstellung der Rezepte, zum Beispiel wenn Fleisch, dann kein Obst
* Suchfunktion für Lebensmittel
* Filter nach Kategorien
* automatische Hinweise zu Allergenen, zum Beispiel farbliche Darstellung bei Rezepten wie z. B. Grün für allergenfreie Brei-Rezepte und Orange/Rot für Rezepte mit Allergenen
* Berücksichtigung von Vitaminen und Nährstoffen bei Rezeptvorschlägen, wie zum Beispiel die Erweiterung der bereits implementierten Empfehlung bei eisenhaltigen Lebensmitteln um die Erkennung der milchhaltigen Zutaten, denn Milchprodukte können die Eisenaufnahme verhindern
* Brei-Rezepte bearbeiten
* Brei-Rezepte löschen
* detaillierte Rezeptansicht
* BabyProfil mit Ernährungstagebuch

## 👩🏻‍💻 Autorin

**Natalia Anna Kaczor**

Semesteraufgabe Webtechnologien 2026

**Babybrei – Webanwendung für die Beikostzeit**




