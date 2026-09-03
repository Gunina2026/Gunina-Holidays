document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("enquiry-form");
  const service = document.getElementById("service");
  const destination = document.getElementById("destination");
  const message = document.getElementById("message");
  const status = document.getElementById("form-status");

  document.querySelectorAll("[data-service]").forEach(button => {
    button.addEventListener("click", () => {
      if (service) service.value = button.dataset.service || "";
      if (destination && button.dataset.destination) destination.value = button.dataset.destination;
      if (message && button.dataset.destination) {
        message.value = `I would like to enquire about ${button.dataset.destination}. Please share the available options and details.`;
      }
    });
  });

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.textContent = "Sending your enquiry...";
      status.style.color = "";

      const submitButton = form.querySelector(".submit-btn");
      submitButton.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        const result = await response.json();

        if (response.ok && result.success) {
          status.textContent = "Thank you! Your enquiry has been sent successfully.";
          status.style.color = "#087b62";
          form.reset();
        } else {
          throw new Error(result.message || "Unable to send enquiry.");
        }
      } catch (error) {
        status.textContent = "We couldn't send the enquiry right now. Please contact us on WhatsApp or call +91 9222336122.";
        status.style.color = "#b33a3a";
      } finally {
        submitButton.disabled = false;
      }
    });
  }
});