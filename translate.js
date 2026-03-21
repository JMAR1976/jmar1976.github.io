let currentLang = "pt";

const translations = {
  pt: {
    home: "Início",
    technology: "Tecnologia",
    ai: "Inteligência Artificial",
    quantum: "Computação Quântica",
    medicine: "Medicina",
    science: "Ciência",
    space: "Espaço",
    robotics: "Robótica",
    energy: "Energia",
    biotech: "Biotecnologia",
    physics: "Física",
    future: "Futuro"
  },
  en: {
    home: "Home",
    technology: "Technology",
    ai: "Artificial Intelligence",
    quantum: "Quantum Computing",
    medicine: "Medicine",
    science: "Science",
    space: "Space",
    robotics: "Robotics",
    energy: "Energy",
    biotech: "Biotechnology",
    physics: "Physics",
    future: "Future"
  }
};

function toggleLanguage() {
  currentLang = currentLang === "pt" ? "en" : "pt";
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];

  document.getElementById("nav-home").innerText = t.home;
  document.getElementById("nav-technology").innerText = t.technology;
  document.getElementById("nav-ai").innerText = t.ai;
  document.getElementById("nav-quantum").innerText = t.quantum;
  document.getElementById("nav-medicine").innerText = t.medicine;
  document.getElementById("nav-science").innerText = t.science;
  document.getElementById("nav-space").innerText = t.space;
  document.getElementById("nav-robotics").innerText = t.robotics;
  document.getElementById("nav-energy").innerText = t.energy;
  document.getElementById("nav-biotech").innerText = t.biotech;
  document.getElementById("nav-physics").innerText = t.physics;
  document.getElementById("nav-future").innerText = t.future;
}
