import { Component } from '@angular/core';
import { Lebensmittel } from '../../interfaces/lebensmittel';
@Component({
  selector: 'app-lebensmittelliste',
  imports: [],
  templateUrl: './lebensmittelliste.html',
  styleUrl: './lebensmittelliste.css',
})
export class Lebensmittelliste {

  //test-Daten 
   lebensmittel: Lebensmittel[] = [
  {
     name: 'Avokado',
     kategorie: "Obst",
     altersempfehlung: 'ab 6 Monate', 
     allergen: "keines",
     beschreibung: "Avocados gehören zu den Lebensmitteln, die sehr reich an gesunden Fetten, Ballaststoffen und zahlreichen wichtigen Nährstoffen sind. Sie sind eine exzellente Quelle für Vitamin E, K, B5, B6, und C sowie Folat und Kalium. Für Babys, die ab sechs Monaten feste Nahrung probieren, sind Avocados ideal, da sie einfach zu pürieren und zu essen sind. Avocados können in verschiedenen Formen serviert werden, zum Beispiel als Guacamole oder in Stückchen als Fingerfood. Ihr milder Geschmack und ihre cremige Textur machen sie zu einer ausgezeichneten Wahl für Babys erste Lebensmittel.", 
     bild: "../assets/avokado.png"
  },
  {
      name: 'Karotten',
      kategorie: "Gemüse",
      altersempfehlung: 'ab 6 Monate',
      allergen: "keines",
      beschreibung: "Karotten sind ein beliebtes erstes Lebensmittel für Babys. Sie sind reich an Beta-Carotin, das im Körper in Vitamin A umgewandelt wird. Karotten können gedämpft oder gekocht und dann püriert oder in weiche Stücke geschnitten werden, um sie als Fingerfood zu servieren.",
      bild: "../assets/karotten.png"
    },
    {
      name: 'Pastinake',
      kategorie: "Gemüse",
      altersempfehlung: 'ab 6 Monate',
      allergen: "keines",
      beschreibung: "Pastinaken sind Wurzelgemüse, das reich an Nährstoffen und einfach zuzubereiten ist. Sie haben einen milden, süßen Geschmack und eine cremige Textur, die Babys oft mögen. Sie können gedämpft und dann püriert oder in weiche Stücke geschnitten werden.",
      bild: "../assets/pastinake.png"
    },
  ];
}
    


