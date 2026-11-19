# Halloween Frankenstein 🧟

Aplicación Ionic + Angular dedicada a **Frankenstein**, con una librería de componentes propia (`halloween-ui`) que se empaqueta y se reutiliza en las tres pestañas de la app.

Trabajo de la actividad evaluable **DI_2 – Aplicación de Halloween con Ionic** (UD2, RA3) · 2º DAM · CampusFP Alcalá de Henares.

**Autor:** Adrián Sánchez Cañadas

## Qué incluye

- **Inicio**: tarjeta de presentación con la frase del monstruo.
- **Historia**: cuatro tarjetas (origen, poderes, debilidades y curiosidades) en rejilla.
- **Galería**: tres escenarios (castillo, laboratorio y tormenta).
- **Librería `halloween-ui`**: componente `MonsterCardComponent` (`<lib-monster-card>`), reutilizado en las 3 pestañas con contenido distinto.

## Requisitos

- Node.js y npm
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)

## Cómo ejecutarlo

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar la librería (obligatorio: la carpeta dist/ no se sube al repo)
ng build halloween-ui

# 3. Arrancar la app
ionic serve
```

> Si se salta el paso 2, la app no arranca: `halloween-ui` se resuelve desde `dist/halloween-ui`.

## Estructura

```
projects/halloween-ui/     Librería Angular (componente monster-card y package.json)
src/app/tab1, tab2, tab3   Páginas que usan el componente de la librería
src/app/tabs               Navegación por pestañas
src/theme/variables.scss   Colores y tipografías (variables --hui-*)
paquete/                   Paquete generado con npm pack (halloween-ui-1.0.0.tgz)
```

## Uso del componente

```ts
// Importar el componente desde la librería
import { MonsterCardComponent } from 'halloween-ui';
```

```html
<!-- Tarjeta con imagen, título, texto y botón -->
<lib-monster-card
  imagen="assets/frankenstein.jpg"
  titulo="Frankenstein"
  [texto]="textoInicio"
  textoBoton="Descubrir"
  (botonPulsado)="alPulsarTarjeta()">
</lib-monster-card>
```

| Propiedad | Tipo | Descripción |
|---|---|---|
| `imagen` | `@Input()` | Ruta de la imagen (opcional) |
| `titulo` | `@Input()` | Título de la tarjeta |
| `texto` | `@Input()` | Texto del cuerpo (respeta los saltos de línea) |
| `textoBoton` | `@Input()` | Texto del botón (por defecto «Descubrir») |
| `botonPulsado` | `@Output()` | Se emite al pulsar el botón |

## Empaquetado de la librería

```bash
# Compilar y generar el .tgz
ng build halloween-ui
cd dist/halloween-ui
npm pack
```

Se genera `halloween-ui-1.0.0.tgz`, copiado en la carpeta `paquete/`. Para instalarlo en otro proyecto:

```bash
npm install ./paquete/halloween-ui-1.0.0.tgz
```

## Créditos de las imágenes

- Frankenstein: Wikimedia Commons (Boris Karloff como el monstruo de Frankenstein)
- Castillo y tormenta: Pinterest
- Laboratorio: Google Imágenes

Tipografías: Creepster y Lato (Google Fonts).
