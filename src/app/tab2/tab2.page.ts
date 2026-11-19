/**
 * Tab2Page
 * Controla la pestaña de Historia (Secretos y leyendas): muestra varias tarjetas
 * (origen, poderes, debilidades y curiosidades) reutilizando MonsterCardComponent
 * de la librería halloween-ui, cada una con contenido distinto.
 */
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
// La tarjeta se importa desde la librería, no desde una copia del archivo
import { MonsterCardComponent } from 'halloween-ui';

// Forma de cada ficha: lo que le pasamos a la tarjeta con @Input()
interface Ficha {
  titulo: string;
  texto: string;
  textoBoton: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab2Page {
  // Lista de fichas. El HTML crea una tarjeta por cada una.
  fichas: Ficha[] = [
    {
      titulo: 'Origen y procedencia',
      texto:
        'Frankenstein nació en el verano de 1816, cuando Mary Shelley escribió su historia ' +
        'durante un reto de relatos de miedo junto al lago de Ginebra. ' +
        'La novela se publicó en 1818.',
      textoBoton: 'Leer más',
    },
    {
      titulo: 'Poderes',
      texto:
        'Fuerza enorme, resistencia al dolor y a las heridas, ' +
        'agilidad y una inteligencia que aprende muy rápido.',
      textoBoton: 'Ver poderes',
    },
    {
      titulo: 'Debilidades',
      texto:
        'El rechazo y la soledad le hacen sufrir más que cualquier herida. ' +
        'Depende de quien lo creó y, en las películas, el fuego es su gran miedo.',
      textoBoton: 'Ver debilidades',
    },
    {
      titulo: 'Curiosidades de Halloween',
      texto:
        'Mucha gente llama Frankenstein al monstruo, pero ese es el apellido de su creador: ' +
        'la criatura no tiene nombre en la novela.\n\n' +
        'Los tornillos del cuello son un invento del cine, no del libro.',
      textoBoton: 'Más curiosidades',
    },
  ];

  // Se ejecuta al pulsar el botón de una tarjeta; recibe la ficha pulsada
  alPulsar(ficha: Ficha): void {
    console.log('Tarjeta pulsada:', ficha.titulo);
  }
}
