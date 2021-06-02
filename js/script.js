window.addEventListener('load', () => {
  emailjs.init('your_user_id');
  // localStorage.setItem('theme');
});

//SELECTORS!
const logo = document.getElementById('logo2');
const Mainlogo = document.getElementById('logo1');
const navItems = document.querySelector('.nav-items');
const menu = document.querySelector('.menu');
const navBar = document.querySelector('nav');
const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// EMAILJS - FORM!
form.addEventListener('submit', (e) => {
  e.preventDefault();
  emailjs
    .send('service_id', 'template_id', {
      name: name.value,
      email: email.value,
      message: message.value,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        window.location = 'thanks.html';
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  e.target.reset();
});

//Theme Toggle!
const toggler = document.querySelector('.switch-btn');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    toggler.classList.add('slide');
    logo.style.display = 'block';
    Mainlogo.style.display = 'none';
  }
}
toggler.addEventListener('click', () => {
  // document.body.classList.toggle('light');
  toggler.classList.toggle('slide');
  if (toggler.classList.contains('slide')) {
    logo.style.display = 'block';
    Mainlogo.style.display = 'none';
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    logo.style.display = 'none';
    Mainlogo.style.display = 'block';
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

//GSAP
const timeline = gsap.timeline({
  defaults: { ease: 'power2.inOut', duration: 1 },
});

timeline
  .fromTo('.hero-contents', { x: '-130%' }, { x: '0' })
  .fromTo('.hero-img', { opacity: 0 }, { opacity: 1 })
  .fromTo('.about-me h1', { opacity: 0 }, { opacity: 1 }, '<0.1')
  .fromTo('.about-me p', { opacity: 0 }, { opacity: 1 }, '<0.1');

//AOS
AOS.init();
