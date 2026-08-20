const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.getElementById('quoteForm');
const message = document.getElementById('formMessage');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const text = `Hello Gunina Holidays!%0A%0AName: ${data.get('name')}%0APhone: ${data.get('phone')}%0ADestination: ${data.get('destination')}%0ATravel Date: ${data.get('date') || 'Not specified'}%0AService: ${data.get('service')}%0AMessage: ${data.get('message') || 'None'}`;
  // Replace 91XXXXXXXXXX with your actual WhatsApp number.
  const whatsappNumber = '919222336122';
  if (whatsappNumber !== '919222336122') {
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    message.textContent = 'Opening WhatsApp with your enquiry...';
  } else {
    message.textContent = 'Your enquiry is ready. Please use WhatsApp to continue the conversation with Gunina Holidays.';
  }
});
