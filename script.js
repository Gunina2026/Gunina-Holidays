const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// The enquiry form is submitted directly to FormSubmit, which forwards
// the customer's enquiry to travel@guninaholidays.in.
// No JavaScript interception is used so the form works reliably on GitHub Pages.
