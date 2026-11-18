/**
 * Tab3Page
 * Controla la pestaña de Galería (El rincón del terror): muestra tarjetas con
 * imagen y una frase terrorífica, reutilizando MonsterCardComponent de la librería.
 */
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
// La tarjeta se importa desde la librería, no desde una copia del archivo
import { MonsterCardComponent } from 'halloween-ui';

// Forma de cada elemento de la galería
interface Elemento {
  imagen: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab3Page {
  // Elementos de la galería. Guarda tus imágenes en src/assets con estos nombres
  // (o cambia aquí la ruta). Reescribe las frases con tus palabras.
  galeria: Elemento[] = [
    {
      imagen: 'assets/castillo.jpg',
      titulo: 'El castillo',
      texto: 'Entre truenos y relámpagos, sus muros guardan algo que nunca debió despertar.',
    },
    {
      imagen: 'assets/laboratorio.jpg',
      titulo: 'El laboratorio',
      texto: 'Aquí la ciencia cruzó una línea de la que no se puede volver.',
    },
    {
      imagen: 'assets/tormenta.jpg',
      titulo: 'La tormenta',
      texto: 'Cada rayo que cae es un latido más de la criatura.',
    },
  ];

  // Se ejecuta al pulsar el botón de una tarjeta
  alPulsar(elemento: Elemento): void {
    console.log('Galería, tarjeta pulsada:', elemento.titulo);
  }
}
