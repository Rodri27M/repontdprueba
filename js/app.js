
// 1) Mostrar referencia según artículo 
function mostrarReferencia(indice) {
  const referencias = {
    1: "Karunamurthy, A., Vijayan, K., Kshirsagar, P. R., & Tan, K. T. (2025). An optimal federated learning-based intrusion detection for IoT environment. Scientific Reports, 15(1), 1–15. https://doi.org/10.1038/s41598-025-93501-8",
    2: "Maghrabi, L. A., Subahi, A., Alghanmi, N. A., Althaqafi, T., Abid, N. J., & Ragab, M. (2025). An efficient trustworthy cyberattack defence mechanism system for self guided federated learning framework using attention induced deep convolution neural networks. Scientific Reports, 15(1), 1–20. https://doi.org/10.1038/s41598-025-01561-7",
    3: "Timofte, E. M., Dimian, M., Graur, A., Potorac, A. D., & Balan, D. (2025). Federated learning for cybersecurity: A privacy-preserving approach. Applied Sciences, 15(12), 6878. https://doi.org/10.3390/app15126878",
    4: "López Ferreiro, M. Á., Gil Ruiz, J., García, Ó., & De La Fuente Valentín, L. (2025). Artificial intelligent application in project management: An algorithm comparison for solar plants planning construction. Expert Systems, 42(9), e70105. https://doi.org/10.1111/exsy.70105",
    5: "Brandao, P. R. (2025). Exploring the role of artificial intelligence in detecting advanced persistent threats. Computers, 14(7), 245. https://doi.org/10.3390/computers14070245",
    6: "Brandão, P., & Silva, C. (2025). Unveiling the shadows—A framework for APT’s defense AI and game theory strategy. Algorithms, 18(7), 404. https://doi.org/10.3390/a18070404"
  };
  //por si no llegan a tener la referencia simplemente muestra que no esta disponible
  const texto = "Referencia APA:\n\n" + (referencias[indice] || "Referencia no disponible."); 
  alert(texto);
}

// 2) cambia el color aleatoriamente entre los colores pastel (asi se puede leer mejor)

function cambiarFondo() {
  const colores = ["#FFFBEB", "#E8F7FF", "#F0FFF4", "#FFF0F6", "#F7FFF0"];
  const elegido = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = elegido;
}

// 3) Mensaje de informacion
function mostrarMensaje() {
  alert("Información: página con resultados de consultas de base de datos de la universidad KL.");
}
// --- Aportes Daniel ---
// 1) Mostrar referencia de mis artículos
function mostrarReferenciaDaniel(indice) {
  const referencias = {
    1: "Kim, Y. B. (2025). Smartphone-based polyp detection: a first step towards an open-source AI framework. Journal of Medical Artificial Intelligence, 8, 49. https://doi.org/10.21037/jmai-24-310",
    2: "Aoyama, N., Nakajo, K., Sasabe, M., Inaba, A., Nakanishi, Y., Seno, H., & Yano, T. (2026). Effects of artificial intelligence assistance on endoscopist performance. DEN Open, 6(1), e70083. https://doi.org/10.1002/deo2.70083",
    3: "Roser, D., Meinikheim, M., Muzalyova, A., et al. (2026). Artificial Intelligence-assisted Endoscopy and Examiner Confidence. DEN Open, 6(1), e70150. https://doi.org/10.1002/deo2.70150"
  };
  alert("Referencia APA:\n\n" + (referencias[indice] || "No disponible"));
}

// 2) Contar mis artículos
function contarMisArticulos() {
  const total = document.querySelectorAll(".section .article").length;
  alert("Has agregado " + total + " artículos propios.");
}

// 3) Mostrar/Ocultar mis artículos
function toggleMisArticulos() {
  const seccion = document.querySelector(".section");
  if (seccion.style.display === "none") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
}
// Rodrigo: 
  let indice = 0;
function carrusel(){
   const carrusel = document.querySelector(".carrusel-contenido");
   const articulos = document.querySelectorAll(".estilo");
   const total = articulos.length;
    if (!carrusel || total === 0) {
    console.error("No se encontró el carrusel o no hay artículos.");
    return;
    }
   carrusel.style.transform = `translateX(-${indice * 100}%)`;
   indice = (indice + 1)%total;
  //const articulos = document.querySelectorAll(".estilo");
  //articulos.forEach(art => art.style.display = "nome");
  //articulos[indice].style.display = "block"
  //indice = (indice + 1) % articulos.length;
  
}
//carrusel();
  setInterval(carrusel, 5000);
