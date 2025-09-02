
// 1) Mostrar referencia según artículo 
function mostrarReferencia(indice) {
  const referencias = {
    1: "Karunamurthy, A., Vijayan, K., Kshirsagar, P. R., & Tan, K. T. (2025). An optimal federated learning-based intrusion detection for IoT environment. Scientific Reports, 15(1), 1–15. https://doi.org/10.1038/s41598-025-93501-8",
    2: "Maghrabi, L. A., Subahi, A., Alghanmi, N. A., Althaqafi, T., Abid, N. J., & Ragab, M. (2025). An efficient trustworthy cyberattack defence mechanism system for self guided federated learning framework using attention induced deep convolution neural networks. Scientific Reports, 15(1), 1–20. https://doi.org/10.1038/s41598-025-01561-7",
    3: "Timofte, E. M., Dimian, M., Graur, A., Potorac, A. D., & Balan, D. (2025). Federated learning for cybersecurity: A privacy-preserving approach. Applied Sciences, 15(12), 6878. https://doi.org/10.3390/app15126878"
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
