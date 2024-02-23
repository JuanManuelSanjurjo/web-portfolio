// Seleccionar el div flotante
const floatingDiv = document.querySelector('#section-floating-title');

// Seleccionar todas las secciones
const sections = document.querySelectorAll('section');

// Definir las opciones del observador
const options = {
  root: null, // Usar el viewport como raíz
  rootMargin: '0px',
  threshold:  0.1 // Activa el callback cuando el  50% de la sección está visible
};

// Definir la función de callback
const onIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cambiar el contenido del div flotante con el nombre de la sección
      floatingDiv.textContent = entry.target.id;
      floatingDiv.classList.add("visible")
      floatingDiv.classList.remove("notVisible")
      entry.target.classList.add("visible")
    }
    else{
      floatingDiv.classList.remove("visible")
      floatingDiv.classList.add("notVisible")
      entry.target.classList.remove("visible")
    }

  });
};
// Crear el observador
const observer = new IntersectionObserver(onIntersect, options);

// Observar cada sección
sections.forEach(section => {
  observer.observe(section);
});



// Select form elements
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const contentInput = document.querySelector("#content");

// Add event listener to submit button
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  // Clear input values
  if(emailInput.value !== "" || subjectInput.value !== "" || contentInput.value !== ""){

    submitBtn.textContent = "Sending...";
  }
  // emailInput.value = "";
  // subjectInput.value = "";
  // contentInput.value = "";

  // Change submit button text

  // Perform form submission
  // submitBtn.submit();
});


