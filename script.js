/* Gunina Holidays - site interactions */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile navigation
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute(
          'aria-label',
          isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute(
            'aria-label',
            'Open navigation menu'
          );
        });
      });

      document.addEventListener('click', function (event) {
        if (
          !navLinks.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute(
            'aria-label',
            'Open navigation menu'
          );
        }
      });
    }

    // Set the earliest travel date to today.
    const dateInput = document.querySelector('input[name="date"]');

    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');

      dateInput.min = yyyy + '-' + mm + '-' + dd;
    }

    // Quote form submission via Web3Forms.
    const form = document.getElementById('quoteForm');
    const messageBox = document.getElementById('formMessage');

    if (form && messageBox) {
      form.addEventListener('submit', async function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const submitButton = form.querySelector('.form-submit');
        const originalText = submitButton
          ? submitButton.textContent
          : '';

        messageBox.className = 'form-message';
        messageBox.textContent = 'Sending your enquiry...';

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
        }

        try {
          const formData = new FormData(form);

          const response = await fetch(
            'https://api.web3forms.com/submit',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json'
              },
              body: formData
            }
          );

          const result = await response.json();

          if (response.ok && result.success) {
            messageBox.className = 'form-message success';

            messageBox.textContent =
              'Thank you! Your enquiry has been sent successfully. ' +
              'Gunina Holidays will contact you shortly.';

            form.reset();

            // Restore sensible defaults after reset.
            const adults = form.querySelector(
              'input[name="adults"]'
            );

            const children = form.querySelector(
              'input[name="children"]'
            );

            const infants = form.querySelector(
              'input[name="infants"]'
            );

            if (adults) adults.value = '1';
            if (children) children.value = '0';
            if (infants) infants.value = '0';

            if (dateInput) {
              dateInput.min = new Date()
                .toISOString()
                .split('T')[0];
            }
          } else {
            throw new Error(
              result.message || 'Unable to send enquiry.'
            );
          }
        } catch (error) {
          console.error(
            'Gunina Holidays enquiry error:',
            error
          );

          messageBox.className = 'form-message error';

          messageBox.textContent =
            'Sorry, we could not send your enquiry right now. ' +
            'Please call 9222336122 or contact us on WhatsApp.';
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }
        }
      });
    }
  });
})();
