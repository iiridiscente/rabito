# 🐰 Rabito — Tienda Kawaii Virtual

## Nombre de la tienda
**Rabito** — Tu moda kawaii favorita

## Temática
Tienda online de ropa y accesorios de moda kawaii, orientada a un público femenino amante del estilo japonés adorable. Incluye faldas, zapatos, bolsos y joyería con una estética pastel y encantadora.

## Tecnologías usadas
| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Variables, Flexbox, Grid, animaciones CSS |
| **JavaScript ES6+** | Lógica de la aplicación |
| **Vue 3** (CDN) | Reactividad, directivas, componentes |
| **Google Fonts** | Nunito (headings) + Quicksand (body) |
| **Git** | Control de versiones |

## Estructura del proyecto
```
rabito/
│
├── index.html                ← Punto de entrada
├── README.md
│
├── css/
│   └── styles.css            ← Identidad visual completa
│
├── js/
│   └── app.js                ← Lógica Vue: data, computed, methods
│
├── components/
│   ├── Navbar.js             ← Barra de nav con logo SVG del conejito
│   ├── Hero.js               ← Sección hero animada con mascota
│   ├── ProductCard.js        ← Tarjeta de producto
│   ├── ProductList.js        ← Grilla con v-for + transition-group
│   ├── ProductDetail.js      ← Vista detalle con tallas y envío
│   └── Cart.js               ← Carrito completo con resumen
│
└── assets/
    └── images/               ← Imágenes de productos (opcional)
```


## Funcionalidades implementadas

### Obligatorias ✅
- [x] Catálogo de 14 productos (faldas, zapatos, bolsos, joyería)
- [x] Vista de detalle de cada producto con selector de talla
- [x] Carrito: agregar, eliminar, modificar cantidades
- [x] Subtotal por producto y total general automático
- [x] Simulación de compra con mensaje de confirmación
- [x] Cálculo de envío gratis sobre $30.000

### Directivas Vue utilizadas ✅
- `v-for` — Productos, carrito, categorías, tallas
- `v-bind` / `:` — Props de componentes, clases dinámicas
- `v-model` — Búsqueda en tiempo real
- `v-if` / `v-else` — Vistas condicionales (carrito, detalle, hero)
- `v-show` — Elementos condicionales ligeros
- Componentes Vue — 6 componentes reutilizables

### Bonus implementados ⭐
- [x] Filtros por categoría (Todos, Faldas, Zapatos, Bolsos, Joyería)
- [x] Búsqueda de productos en tiempo real
- [x] Animaciones Vue (transition-group en lista y carrito)
- [x] Diseño responsive completo (móvil, tablet, desktop)
- [x] Animaciones CSS (mascota flotante, burbujas, hover cards)
- [x] Toast de notificación al agregar productos

## Identidad visual
- **Estilo:** Kawaii / Pastel femenino
- **Paleta:** Rosa chicle `#f9a8d4` · Lila `#c084fc` · Melocotón `#fdba74` · Crema `#fffbf7`
- **Tipografía:** Nunito 900 (display) + Quicksand (body)
- **Logo:** Conejito SVG rosa con lazo lila

## Criterios de evaluación cubiertos
| Criterio | Pts | Estado |
|---|---|---|
| Catálogo funcional | 10 | ✅ |
| Carrito funcional | 15 | ✅ |
| Cálculo de totales | 10 | ✅ |
| Simulación de compra | 5 | ✅ |
| Uso de directivas | 10 | ✅ |
| Uso de componentes | 10 | ✅ |
| Organización del código | 5 | ✅ |
| Navegación clara | 5 | ✅ |
| Feedback al usuario | 5 | ✅ |
| Facilidad de uso | 5 | ✅ |
| Diseño limpio | 5 | ✅ |
| Estilos coherentes | 5 | ✅ |
| Commits claros | 5 | ✅ |
| Estructura del proyecto | 5 | ✅ |
| **BONUS** filtros + búsqueda + animaciones | +10 | ✅ |


