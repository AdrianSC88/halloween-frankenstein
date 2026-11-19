/**
 * Tab1Page
 * Controla la pestaña de Inicio: aquí se presenta al monstruo
 * usando la tarjeta MonsterCardComponent de nuestra librería halloween-ui.
 */
import { Component } from '@angular/core';
// Componentes de Ionic que usa la plantilla de esta página
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
// La tarjeta se importa desde la librería, no desde una copia del archivo
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // Todo lo que se use en el HTML tiene que estar en esta lista
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab1Page {
  // Texto que se muestra dentro de la tarjeta.
  // \n\n = línea en blanco entre párrafos y \n = salto de línea simple.
  textoInicio =
    '«Fui creado con retales de los muertos, y aun así soy el único que siente.»\n\n' +
    'Frankenstein nació en la novela que Mary Shelley publicó en 1818. ' +
    'En ella, el científico Victor Frankenstein ensambla un cuerpo con restos humanos ' +
    'y lo devuelve a la vida con una descarga eléctrica. ' +
    'Al ver su obra, Victor huye horrorizado y abandona a su criatura, ' +
    'que crece sola, rechazada por todos. ' +
    'Esa soledad la convierte en un ser lleno de rencor y sed de venganza.';

  // Se ejecuta cuando se pulsa el botón de la tarjeta
  alPulsarTarjeta(): void {
    console.log('Botón de la tarjeta pulsado');
  }
}