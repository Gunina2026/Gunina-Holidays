/* Gunina Holidays - site interactions */
(function () {
  'use strict';

  const destinations = {
    "Malaysia": ["Kuala Lumpur", "Genting Highlands", "Langkawi", "Penang", "Malacca"],
    "Japan": ["Tokyo", "Kyoto", "Osaka", "Mt. Fuji", "Sapporo", "Hiroshima"],
    "Dubai / UAE": ["Dubai", "Abu Dhabi", "Sharjah", "Desert Safari", "Burj Khalifa"],
    "Europe": ["Paris", "Switzerland", "Italy", "Amsterdam", "Austria", "Germany", "Spain", "Greece"],
    "Thailand": ["Bangkok", "Phuket", "Krabi", "Pattaya", "Chiang Mai", "Koh Samui"],
    "Bali / Indonesia": ["Ubud", "Kuta", "Nusa Penida", "Seminyak", "Uluwatu", "Gili Islands"],
    "Singapore": ["Marina Bay", "Sentosa Island", "Gardens by the Bay", "Universal Studios", "Singapore Zoo"],
    "Vietnam": ["Hanoi", "Halong Bay", "Da Nang", "Hoi An", "Ho Chi Minh City", "Phu Quoc"],
    "Turkey": ["Istanbul", "Cappadocia", "Antalya", "Pamukkale", "Bodrum"],
    "Switzerland": ["Zurich", "Lucerne", "Interlaken", "Zermatt", "Geneva", "Jungfrau"],
    "France": ["Paris", "Nice", "Lyon", "Versailles", "French Riviera"],
    "Italy": ["Rome", "Venice", "Florence", "Milan", "Amalfi Coast", "Pisa"],
    "Australia": ["Sydney", "Melbourne", "Gold Coast", "Cairns", "Brisbane", "Perth"],
    "New Zealand": ["Auckland", "Queenstown", "Rotorua", "Christchurch", "Milford Sound"],
    "USA": ["New York", "Los Angeles", "Las Vegas", "Miami", "Orlando", "San Francisco"],
    "Canada": ["Toronto", "Vancouver", "Banff", "Montreal", "Calgary", "Niagara Falls"],
    "Egypt": ["Cairo", "Giza", "Luxor", "Hurghada", "Sharm El Sheikh"],
    "Mauritius": ["Grand Baie", "Port Louis", "Chamarel", "Flic en Flac", "Ile aux Cerfs"],
    "Maldives": ["Male", "Maafushi", "Hulhumale", "Private Island Resorts", "Vaavu Atoll"],
    "Sri Lanka": ["Colombo", "Kandy", "Ella", "Bentota", "Nuwara Eliya", "Galle"],
    "Greece": ["Athens", "Santorini", "Mykonos", "Crete", "Rhodes", "Meteora"]
  };

  const visaCountries = [
    ["🇩🇪", "Germany"], ["🇫🇷", "France"], ["🇮🇹", "Italy"], ["🇪🇸", "Spain"],
    ["🇨🇭", "Switzerland"], ["🇳🇱", "Netherlands"], ["🇦🇹", "Austria"], ["🇬🇷", "Greece"],
    ["🇵🇹", "Portugal"], ["🇳🇴", "Norway"], ["🇸🇪", "Sweden"], ["🇩🇰", "Denmark"],
    ["🇳🇿", "New Zealand"], ["🇸🇬", "Singapore"], ["🇻🇳", "Vietnam"], ["🇹🇭", "Thailand"],
    ["🇲🇾", "Malaysia"], ["🇯🇵", "Japan"], ["🇰🇷", "South Korea"], ["🇨🇳", "China"],
    ["🇮🇩", "Indonesia"], ["🇱🇰", "Sri Lanka"], ["🇪🇬", "Egypt"], ["🇿🇦", "South Africa"],
    ["🇲🇺", "Mauritius"], ["🇲🇻", "Maldives"], ["🇹🇷", "Turkey"], ["🇦🇪", "UAE"]
  ];

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const dateInput = document.querySelector('input[name="date"]');
    if (dateInput) {
      const now = new Date();
      dateInput.min = now.toISOString().split('T')[0];
    }

    const modalOpeners = document.querySelectorAll('.open-quote-picker');
    const pickerModal = document.getElementById('destinationPicker');
    const visaModal = document.getElementById('visaPicker');
    const feedbackModal = document.getElementById('feedbackModal');

    function openModal(modal) {
      if (!modal) return;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (!document.querySelector('.modal.open')) document.body.classList.remove('modal-open');
    }
    document.querySelectorAll('[data-close-modal]').forEach(function (el) {
      el.addEventListener('click', function () {
        closeModal(el.closest('.modal'));
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal);
    });

    // Destination picker
    const countryPicker = document.getElementById('countryPicker');
    const placePicker = document.getElementById('placePicker');
    const placesStep = document.getElementById('placesStep');
    const selectedCountryLabel = document.getElementById('selectedCountryLabel');
    const selectionTags = document.getElementById('selectionTags');
    const proceedEnquiry = document.getElementById('proceedEnquiry');
    const destinationInput = document.getElementById('destinationInput');
    const selectedPlacesInput = document.getElementById('selectedPlacesInput');
    let selectedPlaces = new Set();

    Object.keys(destinations).forEach(function (country) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'country-option';
      btn.innerHTML = '<strong>' + country + '</strong><small>' + destinations[country].length + ' popular places</small>';
      btn.addEventListener('click', function () {
        document.querySelectorAll('.country-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        placesStep.hidden = false;
        selectedCountryLabel.textContent = '— ' + country;
        placePicker.innerHTML = '';
        destinations[country].forEach(function (place) {
          const key = country + ' — ' + place;
          const placeBtn = document.createElement('button');
          placeBtn.type = 'button';
          placeBtn.className = 'place-option' + (selectedPlaces.has(key) ? ' selected' : '');
          placeBtn.innerHTML = '<strong>' + place + '</strong><small>' + country + '</small>';
          placeBtn.addEventListener('click', function () {
            if (selectedPlaces.has(key)) {
              selectedPlaces.delete(key);
              placeBtn.classList.remove('selected');
            } else {
              selectedPlaces.add(key);
              placeBtn.classList.add('selected');
            }
            renderSelection();
          });
          placePicker.appendChild(placeBtn);
        });
      });
      countryPicker.appendChild(btn);
    });

    function renderSelection() {
      selectionTags.innerHTML = '';
      if (!selectedPlaces.size) {
        selectionTags.innerHTML = '<span class="empty-selection">No places selected yet.</span>';
        proceedEnquiry.disabled = true;
      } else {
        selectedPlaces.forEach(function (item) {
          const tag = document.createElement('span');
          tag.className = 'selection-tag';
          tag.innerHTML = item + ' <button type="button" aria-label="Remove">×</button>';
          tag.querySelector('button').addEventListener('click', function () {
            selectedPlaces.delete(item);
            renderSelection();
            document.querySelectorAll('.place-option').forEach(function (b) {
              if (b.textContent.startsWith(item.split(' — ')[1])) b.classList.remove('selected');
            });
          });
          selectionTags.appendChild(tag);
        });
        proceedEnquiry.disabled = false;
      }
    }

    modalOpeners.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(pickerModal);
      });
    });

    // Every destination card opens the same guided selector.
    document.querySelectorAll('.destination-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('button')) e.preventDefault();
        const country = card.dataset.destination;
        openModal(pickerModal);
        setTimeout(function () {
          const buttons = Array.from(countryPicker.querySelectorAll('.country-option'));
          const match = buttons.find(b => b.querySelector('strong').textContent === country);
          if (match) match.click();
        }, 0);
      });
    });

    proceedEnquiry.addEventListener('click', function () {
      const items = Array.from(selectedPlaces);
      if (!items.length) return;
      const grouped = items.join('; ');
      destinationInput.value = grouped;
      selectedPlacesInput.value = grouped;
      const message = document.querySelector('textarea[name="message"]');
      if (message && !message.value.trim()) {
        message.value = 'I would like an itinerary/quote for: ' + grouped;
      }
      closeModal(pickerModal);
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(function () { if (destinationInput) destinationInput.focus(); }, 500);
    });

    // Other visa countries
    const otherVisaGrid = document.getElementById('otherVisaGrid');
    const visaEnquire = document.getElementById('visaEnquire');
    let selectedVisa = '';
    visaCountries.forEach(function (item) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'other-visa-option';
      btn.innerHTML = '<span>' + item[0] + '</span> <strong>' + item[1] + ' Visa</strong><small>Visa assistance</small>';
      btn.addEventListener('click', function () {
        document.querySelectorAll('.other-visa-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedVisa = item[1];
        visaEnquire.disabled = false;
      });
      otherVisaGrid.appendChild(btn);
    });
    const openOtherVisa = document.getElementById('openOtherVisa');
    if (openOtherVisa) openOtherVisa.addEventListener('click', () => openModal(visaModal));
    visaEnquire.addEventListener('click', function () {
      if (!selectedVisa) return;
      const destination = document.getElementById('destinationInput');
      const service = document.querySelector('select[name="service"]');
      if (destination) destination.value = selectedVisa;
      if (selectedPlacesInput) selectedPlacesInput.value = selectedVisa + ' Visa Assistance';
      if (service) service.value = 'Visa Assistance';
      closeModal(visaModal);
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => destination && destination.focus(), 500);
    });

    // Feedback modal + Web3Forms
    const openFeedback = document.getElementById('openFeedback');
    if (openFeedback) openFeedback.addEventListener('click', () => openModal(feedbackModal));

    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    if (feedbackForm && feedbackMessage) {
      feedbackForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (!feedbackForm.checkValidity()) {
          feedbackForm.reportValidity();
          return;
        }
        const button = feedbackForm.querySelector('.form-submit');
        const original = button.textContent;
        feedbackMessage.className = 'form-message';
        feedbackMessage.textContent = 'Sending your feedback...';
        button.disabled = true;
        button.textContent = 'Sending...';
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: new FormData(feedbackForm)
          });
          const result = await response.json();
          if (!response.ok || !result.success) throw new Error(result.message || 'Unable to send feedback.');
          feedbackMessage.className = 'form-message success';
          feedbackMessage.textContent = 'Thank you! Your feedback has been sent successfully.';
          feedbackForm.reset();
        } catch (error) {
          console.error('Gunina Holidays feedback error:', error);
          feedbackMessage.className = 'form-message error';
          feedbackMessage.textContent = 'Sorry, your feedback could not be sent. Please try again or contact us on WhatsApp.';
        } finally {
          button.disabled = false;
          button.textContent = original;
        }
      });
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
        const originalText = submitButton ? submitButton.textContent : '';
        messageBox.className = 'form-message';
        messageBox.textContent = 'Sending your enquiry...';
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
        }
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: new FormData(form)
          });
          const result = await response.json();
          if (response.ok && result.success) {
            messageBox.className = 'form-message success';
            messageBox.textContent = 'Thank you! Your enquiry has been sent successfully. Gunina Holidays will contact you shortly.';
            form.reset();
            if (document.getElementById('selectedPlacesInput')) document.getElementById('selectedPlacesInput').value = '';
            if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
            const adults = form.querySelector('input[name="adults"]');
            const children = form.querySelector('input[name="children"]');
            const infants = form.querySelector('input[name="infants"]');
            if (adults) adults.value = '1';
            if (children) children.value = '0';
            if (infants) infants.value = '0';
          } else {
            throw new Error(result.message || 'Unable to send enquiry.');
          }
        } catch (error) {
          console.error('Gunina Holidays enquiry error:', error);
          messageBox.className = 'form-message error';
          messageBox.textContent = 'Sorry, we could not send your enquiry right now. Please call 9222336122 or contact us on WhatsApp.';
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
