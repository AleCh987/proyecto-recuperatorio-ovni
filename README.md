# proyecto-recuperatorio-ovni

# Sistema de Desclasificación FANI 🛸

Este proyecto es una aplicación web interactiva desarrollada como examen recuperatorio para la materia de Programación Web I. Su objetivo es simular un sistema gubernamental de clasificación de Fenómenos Aéreos No Identificados (FANI / OVNIs).

🔗 **[Ver la página web publicada aquí](https://github.com/AleCh987/proyecto-recuperatorio-ovni)**

## 📋 Descripción del Proyecto
El sistema funciona como un "Simulador de Clasificación de Evidencia OVNI". Permite a un investigador ingresar los datos de un avistamiento a través de un formulario estructurado, procesar esa información y devolver un nivel de confiabilidad (Débil, Moderado o Fuerte) basándose en parámetros preestablecidos de validación de evidencia.

## ⚙️ Funcionalidades
* **Ingreso de datos:** Formulario completo para registrar nombre del reporte, ubicación, testigos y pruebas fotográficas/de radar.
* **Cálculo dinámico:** Uso de lógica condicional para sumar puntos según la calidad de la evidencia presentada.
* **Manipulación del DOM:** La página se actualiza en tiempo real, sin recargar, para mostrar los resultados del análisis al usuario.
* **Interfaz adaptativa:** Diseño responsivo que cambia el esquema de colores de las alertas visuales dependiendo del nivel de clasificación obtenido.

## 💻 Tecnologías Utilizadas
* **HTML5:** Estructuración semántica del contenido.
* **CSS3:** Estilos personalizados, diseño responsivo (*media queries*) y uso de clases para la interfaz gráfica.
* **JavaScript (Vanilla):** Captura de datos del formulario, validación, cálculo matemático y manipulación interactiva del DOM.

## 📂 Estructura de Archivos
* `index.html`: Estructura principal de la aplicación.
* `css/estilos.css`: Hoja de estilos principal.
* `js/script.js`: Lógica de procesamiento y eventos.
* `img/logo.png`: Logotipo del sistema.
