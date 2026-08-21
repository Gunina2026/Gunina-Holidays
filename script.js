const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

const quoteForm = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');

quoteForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const submitButton = quoteForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  const formData = new FormData(quoteForm);
  const data = Object.fromEntries(formData.entries());

  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  formMessage.textContent = 'Please wait while we send your enquiry.';
  formMessage.style.color = '';

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/travel@guninaholidays.in',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json().catch(() => ({}));

    if (
      !response.ok ||
      result.success === false ||
      result.success === 'false'
    ) {
      throw new Error(result.message || 'Unable to send enquiry');
    }

    quoteForm.reset();

    formMessage.textContent =
      'Thank you! Your enquiry has been sent successfully. We will contact you soon.';

    formMessage.style.color = '#087ea4';

  } catch (error) {

    formMessage.textContent =
      'Sorry, your enquiry could not be sent. Please try again or contact us on WhatsApp.';

    formMessage.style.color = '#c0392b';

  } finally {

    submitButton.disabled = false;
    submitButton.textContent = originalText;

  }
});
