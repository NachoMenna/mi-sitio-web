document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const mensaje = form.querySelector("textarea");

    if (!nombre.value || !email.value || !mensaje.value) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    if (!validateEmail(email.value)) {
      alert("Ingresá un email válido.");
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alertBox.classList.remove("d-none");
        form.reset();

        setTimeout(() => {
          alertBox.classList.add("d-none");
        }, 5000);
      } else {
        alert(
          "Hubo un error al enviar el formulario. Intentalo de nuevo más tarde."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error inesperado.");
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
