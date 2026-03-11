
export function Form() {
  const template = document.querySelector("#form-template").cloneNode(true).content;
  const form = template.querySelector("form");
  const { name, buisness, email, tel, message } = form.elements;

  const validators = {
    name: {
      validate: (v) => v.trim().length >= 3 && v.trim().length <= 50 && /^[a-zA-ZÀ-ÿ\s\-']+$/.test(v.trim()),
      error: "Le nom doit contenir entre 3 et 50 caractères (lettres uniquement)."
    },
    buisness: {
      validate: (v) => v.trim().length >= 2 && v.trim().length <= 100,
      error: "L'entreprise doit contenir entre 2 et 100 caractères."
    },
    email: {
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
      error: "L'adresse email n'est pas valide."
    },
    tel: {
      validate: (v) => /^(\+?\d[\s\-.]?){7,15}$/.test(v.trim()),
      error: "Le numéro de téléphone n'est pas valide."
    },
    message: {
      validate: (v) => v.trim().length >= 10 && v.trim().length <= 1000,
      error: "Le message doit contenir entre 10 et 1000 caractères."
    }
  };

  function showError(field, message) {
    // Supprime l'ancienne erreur si elle existe
    const existing = field.parentElement.querySelector(".form-error");
    if (existing) existing.remove();

    field.style.borderColor = "red";

    const error = document.createElement("span");
    error.className = "form-error";
    error.style.cssText = "color: red; font-size: 0.8rem; margin-top: 4px; display: block;";
    error.textContent = message;
    field.parentElement.appendChild(error);
  }

  function clearError(field) {
    const existing = field.parentElement.querySelector(".form-error");
    if (existing) existing.remove();
    field.style.borderColor = "";
  }

  // Validation en temps réel sur chaque champ
  [name, buisness, email, tel, message].forEach((field) => {
    field.addEventListener("input", () => {
      const key = field.name;
      if (validators[key].validate(field.value)) {
        clearError(field);
      }
    });

    field.addEventListener("blur", () => {
      const key = field.name;
      if (!validators[key].validate(field.value)) {
        showError(field, validators[key].error);
      }
    });
  });

  function validateAll() {
    let valid = true;
    for (const [key, { validate, error }] of Object.entries(validators)) {
      const field = form.elements[key];
      if (!validate(field.value)) {
        showError(field, error);
        valid = false;
      } else {
        clearError(field);
      }
    }
    return valid;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateAll()) return;

    emailjs.sendForm('service_nbikay2', 'template_ud96yce', form, import.meta.env.VITE_EMAILJS_KEY)
      .then(() => console.log('Mail client envoyé!'))
      .catch((error) => console.log("Failed client!", error));

    emailjs.sendForm('service_nbikay2', 'template_ewbdd4b', form, import.meta.env.VITE_EMAILJS_KEY)
      .then(() => console.log('Mail admin envoyé!'))
      .catch((error) => console.log("Failed admin!", error));

    window.location.href = "/Success"
  });

  return template;
}
