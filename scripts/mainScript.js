const floatingDiv = document.querySelector("#section-floating-title");

const sections = document.querySelectorAll("section");

// opciones del observador
const options = {
  root: null, // Usar el viewport como raíz
  rootMargin: "0px",
  threshold: 0.1, // Activa el callback cuando el  10% de la sección está visible
};

// Definir la función de callback
const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      floatingDiv.textContent = entry.target.id;
      floatingDiv.classList.remove("notVisible");
      floatingDiv.classList.add("visible");
      entry.target.classList.remove("notVisible");
      entry.target.classList.add("visible");
    } else {
      floatingDiv.classList.remove("visible");
      floatingDiv.classList.add("notVisible");
      entry.target.classList.remove("visible");
      entry.target.classList.add("notVisible");
    }
  });
};

// Crear el observador
const observer = new IntersectionObserver(onIntersect, options);

// Observar cada sección
sections.forEach((section) => {
  observer.observe(section);
});

const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const contentInput = document.querySelector("#content");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  if (
    emailInput.value !== "" ||
    subjectInput.value !== "" ||
    contentInput.value !== ""
  ) {
    submitBtn.textContent = "Sending...";
  }
  // emailInput.value = "";
  // subjectInput.value = "";
  // contentInput.value = "";
});

const navBtn = document.querySelector(".navbtn");
const nav = document.querySelector("nav");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("showNav");
});
