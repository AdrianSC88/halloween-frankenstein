/**
 * TabsPage
 * Controla la barra de pestañas inferior de la app: define los tres botones
 * (Inicio, Historia y Galería) y registra los iconos que usan.
 */
import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
// addIcons registra los iconos de Ionicons que vamos a usar por su nombre
import { addIcons } from 'ionicons';
import { flash, skull, images } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  // Componentes de Ionic que se usan en el HTML de esta página
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor() {
    // Registramos los 3 iconos temáticos: rayo, calavera e imágenes
    addIcons({ flash, skull, images });
  }
}
