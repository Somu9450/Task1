document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stops the page from reloading

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    console.log("Form Submitted:", formData); // Shows details in the console

    // --- New lines added below ---

    alert("Submitted successfully!"); // 1. Shows a success pop-up alert.

    form.reset(); // 2. Resets all the fields in the form.
  });
});