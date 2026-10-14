# VCarMeet - Conecta Cultura React

Aplicación React + Vite para la comunidad automotriz VCarMeet: cartelera de talleres, eventos,
repuestos y estética, con inscripciones guardadas en el navegador y una vista de administración.
Proyecto académico de Desarrollo FullStack II (DuocUC).

## Requisitos

- Node.js 20 o superior (para ejecutar las pruebas se recomienda Node 24).
- npm

## Comandos

| Comando | Uso |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el build |
| `npm run lint` | Revisa el código con ESLint |
| `npm test` | Ejecuta las pruebas y observa cambios |
| `npm run test:run` | Ejecuta las pruebas una sola vez |
| `npm run coverage` | Ejecuta las pruebas y genera el informe de cobertura |

## Rutas

| Ruta | Vista |
|---|---|
| `/` | Inicio con actividades destacadas |
| `/actividades` | Cartelera con filtro por categoría |
| `/actividades/:id` | Detalle de una actividad |
| `/categorias` | Categorías y cantidad de actividades |
| `/categorias/:nombre` | Actividades de una categoría |
| `/ofertas` | Actividades gratuitas o de hasta $10.000 |
| `/inscripciones` | Mis inscripciones (se conservan al recargar) |
| `/admin/actividades` | Formulario para agregar y tabla para eliminar actividades |
| Cualquier otra | Página 404 |

## Estructura

```
src/
├── components/   piezas reutilizables (Cabecera, Navegacion, TarjetaActividad, ...)
├── data/         actividades y categorías simuladas
├── pages/        vistas asociadas a rutas
│   └── admin/    vistas de administración
├── test/         configuración de las pruebas
├── utils/        funciones puras (precio, persistencia)
└── App.jsx       estado global y mapa de rutas
```

## Pruebas

| N° | Archivo | Prueba | Requisito que cubre |
|---|---|---|---|
| 1 | `src/utils/precio.spec.jsx` | muestra cero como Gratis | Una actividad gratuita se informa como "Gratis" |
| 2 | `src/utils/precio.spec.jsx` | formatea un valor positivo | Los precios usan separador de miles chileno |
| 3 | `src/components/TarjetaActividad.spec.jsx` | muestra el nombre recibido por props | La tarjeta presenta los datos que recibe |
| 4 | `src/components/TarjetaActividad.spec.jsx` | muestra aviso cuando quedan pocos cupos | Con 1 a 5 cupos aparece "¡Últimos cupos!" |
| 5 | `src/components/TarjetaActividad.spec.jsx` | ejecuta onInscribir al presionar el botón | El botón entrega la actividad elegida al componente padre |

## Despliegue

El build de producción (`npm run build`) se publica en una instancia EC2 con Nginx, siguiendo la
Guía 12. La configuración de Nginx debe incluir `try_files $uri $uri/ /index.html;` para que las
rutas internas funcionen al recargar.
