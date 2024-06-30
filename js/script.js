window.addEventListener('load', () => {
  emailjs.init('user_2ycGHDtiEG2OA8KCMYXOt');
});

//SELECTORS!
const Mainlogo = document.getElementById('logo1');
const logo = document.getElementById('logo2');
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
    .send('service_npuonpd', 'template_8upsmbs', {
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
});

//Theme Toggle!
const darkBtn = document.querySelector('.dark-icon');
const lightBtn = document.querySelector('.light-icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    darkBtn.style.display = 'block';
    lightBtn.style.display = 'none';
    logo.style.display = 'block';
    Mainlogo.style.display = 'none';
  }
}

lightBtn.addEventListener('click', () => configureTheme('light'));
darkBtn.addEventListener('click', () => configureTheme('dark'));

const configureTheme = (theme) => {
  if (theme === 'dark') {
    logo.style.display = 'none';
    Mainlogo.style.display = 'block';
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    lightBtn.style.display = 'block';
    darkBtn.style.display = 'none';
  } else {
    logo.style.display = 'block';
    Mainlogo.style.display = 'none';
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightBtn.style.display = 'none';
    darkBtn.style.display = 'block';
  }
};

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
