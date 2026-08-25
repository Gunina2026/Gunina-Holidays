const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Gunina Holidays enquiry form - Web3Forms
const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const accessKey = quoteForm.querySelector('input[name="access_key"]')?.value.trim();

    formMessage.textContent = "";
    formMessage.className = "form-message";

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      formMessage.textContent = "The enquiry form is not configured. Please contact us on WhatsApp.";
      formMessage.className = "form-message error";
      return;
    }

    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const formData = new FormData(quoteForm);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        formMessage.textContent = "Thank you! Your enquiry has been submitted successfully. We will contact you shortly.";
        formMessage.className = "form-message success";
        quoteForm.reset();
      } else {
        throw new Error(result.message || "Unable to submit the enquiry.");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      formMessage.textContent = "Sorry, we couldn't submit your enquiry. Please try again or contact us on WhatsApp.";
      formMessage.className = "form-message error";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Enquiry";
    }
  });
}
