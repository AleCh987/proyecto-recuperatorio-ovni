document.addEventListener("DOMContentLoaded", function() {
  
  const formulario = document.getElementById("formulario-ovni");
  const seccionResultado = document.getElementById("seccion-resultado");
  const rangoSpan = document.getElementById("rango");
  const mensajeSugerenciaSpan = document.getElementById("mensaje-sugerencia");
  const btnReiniciar = document.getElementById("btn-reiniciar");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const testigos = parseInt(document.getElementById("testigos").value);
    const video = document.getElementById("video").value;
    const imagen = document.getElementById("imagen").value;
    const radar = document.getElementById("radar").value;
    const explicacion = document.getElementById("explicacion").value;

    let puntajeTotal = 0; 

    if (video === "yes") puntajeTotal += 3;
    if (imagen === "yes") puntajeTotal += 2;
    if (radar === "yes") puntajeTotal += 4;
    if (testigos > 3) puntajeTotal += 2;
    if (explicacion === "no") puntajeTotal += 3;

    let clasificacion = "";
    let color = "";
    let recomendacion = "";

    if (puntajeTotal <= 4) {
      clasificacion = "Evidencia debil";
      color = "#ef4444"; 
      recomendacion = "No requiere investigacion.";
    } else if (puntajeTotal <= 8) {
      clasificacion = "Evidencia moderada";
      color = "#eab308"; 
      recomendacion = "Se requiere revision.";
    } else {
      clasificacion = "Evidencia fuerte";
      color = "#00d4ff"; 
      recomendacion = "¡ALERTA! Son OVNIs. Nos invaden!!";
    }

    rangoSpan.textContent = clasificacion;
    mensajeSugerenciaSpan.textContent = recomendacion;

    rangoSpan.style.color = color;
    seccionResultado.style.borderLeftColor = color;
    
    seccionResultado.classList.remove("oculto");
  });

  btnReiniciar.addEventListener("click", function() {
    seccionResultado.classList.add("oculto");
  });

});