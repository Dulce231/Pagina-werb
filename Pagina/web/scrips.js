const traducciones = {
  es: {
    hero_titulo: "Construyendo un futuro mejor",
    hero_desc: "Innovación y compromiso con nuestros clientes",
    quienes: "Quiénes somos",
    quienes_texto: "Somos una empresa dedicada a ofrecer soluciones innovadoras y de alta calidad.",
    servicios: "Qué hacemos",
    serv1: "Servicio 1", 
    serv1_desc: "Descripción extendida del primer servicio. Ofrecemos soluciones personalizadas para cada cliente con los más altos estándares de calidad.",
    serv2: "Servicio 2", 
    serv2_desc: "Descripción extendida del segundo servicio. Nuestro equipo de expertos garantiza resultados excepcionales en cada proyecto.",
    serv3: "Servicio 3", 
    serv3_desc: "Descripción extendida del tercer servicio. Innovación constante y adaptación a las necesidades del mercado.",
    serv4: "Servicio 4", 
    serv4_desc: "Descripción extendida del cuarto servicio. Enfocados en resultados medibles y satisfacción del cliente.",
    serv5: "Servicio 5", 
    serv5_desc: "Descripción extendida del quinto servicio. Comprometidos con la excelencia y mejora continua en todos nuestros procesos.",
    ver_mas: "Ver más", 
    ver_menos: "Ver menos"
  },
  en: {
    hero_titulo: "Building a Better Future",
    hero_desc: "Innovation and commitment with our clients",
    quienes: "About Us",
    quienes_texto: "We are a company dedicated to offering innovative and high-quality solutions.",
    servicios: "Services",
    serv1: "Service 1", 
    serv1_desc: "Extended description of the first service. We offer customized solutions for each client with the highest quality standards.",
    serv2: "Service 2", 
    serv2_desc: "Extended description of the second service. Our team of experts guarantees exceptional results in every project.",
    serv3: "Service 3", 
    serv3_desc: "Extended description of the third service. Constant innovation and adaptation to market needs.",
    serv4: "Service 4", 
    serv4_desc: "Extended description of the fourth service. Focused on measurable results and customer satisfaction.",
    serv5: "Service 5", 
    serv5_desc: "Extended description of the fifth service. Committed to excellence and continuous improvement in all our processes.",
    ver_mas: "See more", 
    ver_menos: "See less"
  }
};

let idiomaActual = localStorage.getItem("idioma") || "es";

function actualizarTextos() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (traducciones[idiomaActual][key]) {
      el.textContent = traducciones[idiomaActual][key];
    }
  });

  document.querySelectorAll(".btn-toggle").forEach(btn => {
    const card = btn.closest(".card");
    btn.textContent = card.classList.contains("expanded")
      ? traducciones[idiomaActual].ver_menos
      : traducciones[idiomaActual].ver_mas;
  });

  actualizarIdiomaActivo();
}

function actualizarIdiomaActivo() {
  const labelES = document.getElementById("labelESP");
  const labelEN = document.getElementById("labelENG");

  // Resetear ambas etiquetas primero
  labelES.classList.remove("lang-active", "lang-inactive");
  labelEN.classList.remove("lang-active", "lang-inactive");

  if (idiomaActual === "es") {
    labelES.classList.add("lang-active");
    labelEN.classList.add("lang-inactive");
  } else {
    labelEN.classList.add("lang-active");
    labelES.classList.add("lang-inactive");
  }
}

function inicializarAcordeon() {
  document.querySelectorAll(".btn-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      card.classList.toggle("expanded");
      btn.textContent = card.classList.contains("expanded")
        ? traducciones[idiomaActual].ver_menos
        : traducciones[idiomaActual].ver_mas;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleIdioma");
  toggle.checked = idiomaActual === "en";

  toggle.addEventListener("change", () => {
    idiomaActual = toggle.checked ? "en" : "es";
    localStorage.setItem("idioma", idiomaActual);
    actualizarTextos();
  });

  actualizarTextos();
  inicializarAcordeon();
});