/**
 * MonsterCardComponent
 * Controla la tarjeta temática de Halloween: muestra una imagen, un título,
 * un texto y un botón. El contenido lo decide la página que la usa
 * mediante @Input(), y avisa de la pulsación del botón mediante @Output().
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
// Botón de Ionic que usa la plantilla de la tarjeta.
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'lib-monster-card', // etiqueta que se usará en el HTML
  standalone: true,
  imports: [IonButton],         // dependencias que necesita la plantilla
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
})
export class MonsterCardComponent {
  // Ruta de la imagen que se muestra arriba de la tarjeta
  @Input() imagen = '';
  // Título de la tarjeta
  @Input() titulo = '';
  // Texto descriptivo de la tarjeta
  @Input() texto = '';
  // Texto que aparece dentro del botón
  @Input() textoBoton = 'Descubrir';

  // Evento que se emite cuando se pulsa el botón
  @Output() botonPulsado = new EventEmitter<void>();

  // Se ejecuta al pulsar el botón: avisa a la página que usa la tarjeta
  alPulsar(): void {
    this.botonPulsado.emit();
  }
}