# 🏠 Agencia Inmobiliaria Inditex Once

Plataforma web para la gestión y visualización de propiedades inmobiliarias. Este proyecto permite consultar un catálogo de casas y propiedades con información detallada sobre cada una de ellas.

## 📋 Descripción

**Agencia Inmobiliaria Inditex Once** es una aplicación web moderna desarrollada con HTML5, CSS3 y JavaScript vanilla. La plataforma cuenta con un sistema de visualización de propiedades mediante tarjetas interactivas, componentes personalizados y una interfaz responsiva.

## ✨ Características

- 🏘️ Visualización de propiedades en formato de tarjetas
- 📱 Diseño responsivo con Bootstrap 5
- 🎨 Componentes web personalizados (Web Components)
- 📊 Carga dinámica de datos desde JSON
- 🔍 Interfaz intuitiva y fácil de usar
- 🏷️ Información detallada de cada propiedad (precio, ubicación, descripción)
- 📍 Información de localización y características de las propiedades

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura y semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript ES6+** - Lógica y funcionalidad
- **Bootstrap 5** - Framework CSS
- **Web Components** - Componentes personalizados
- **JSON** - Almacenamiento de datos

## 📁 Estructura del Proyecto

```
agenciaInmobiliaria/
├── index.html           # Página principal
├── css/
│   ├── index.css        # Estilos generales
│   ├── header.css       # Estilos del encabezado
│   └── footer.css       # Estilos del pie de página
├── js/
│   ├── index.js         # Script principal
│   ├── header.js        # Componente del encabezado
│   └── footer.js        # Componente del pie de página
├── json/
│   ├── house.json       # Datos de las propiedades
│   └── test.json        # Datos de prueba
├── html/
│   └── aboutUs.html     # Página "Sobre Nosotros"
├── LICENSE.txt          # Licencia MIT
└── README.md            # Este archivo
```

## 🚀 Cómo Usar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JMgranaBUAB/agenciaInmobilaria.git
   ```

2. **Abrir la aplicación**
   - Abre `index.html` en tu navegador
   - O sirve el proyecto con un servidor local (XAMPP, Live Server, etc.)

3. **Ver las propiedades**
   - La página principal carga automáticamente las propiedades desde `json/house.json`
   - Explora cada propiedad viendo su información detallada

## 📊 Formato de Datos

Las propiedades se almacenan en formato JSON con la siguiente estructura:

```json
{
  "houses": [
    {
      "id": 1,
      "image": "URL_de_la_imagen",
      "price": "550.000",
      "city": "Nombre de la ciudad",
      "description": "Descripción de la propiedad"
    }
  ]
}
```

## 🔧 Funcionalidades Principales

### Cargar Propiedades
El script `js/index.js` obtiene las propiedades del archivo JSON y las muestra dinámicamente:

- Fetch asíncrono de datos
- Generación dinámica de tarjetas HTML
- Manejo de errores

### Componentes Web Personalizados
- **Header personalizado** (`header.js`)
- **Footer personalizado** (`footer.js`)
- Reutilización de código mediante Web Components

## 🌐 Navegación

- **Página Principal**: Catálogo de propiedades
- **Sobre Nosotros**: Información de la agencia
- **Header y Footer**: Navegación común en todas las páginas

## 📝 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (para evitar problemas CORS)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerir mejoras.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE.txt` para más detalles.

## 👨‍💼 Autor

**JMgranaBUAB** - [GitHub](https://github.com/JMgranaBUAB)

---

**Última actualización**: 12 de diciembre de 2025
