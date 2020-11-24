//NavBar Toggle
const ham = document.querySelector('.ham');
const logo = document.getElementById('logo2');
const Mainlogo = document.getElementById('logo1');
const navItems = document.querySelector('.nav-items');
ham.addEventListener('click', () => {
  navItems.classList.toggle('ul-show');
});

//Theme Toggle
const toggler = document.querySelector('.theme-toggle');
toggler.addEventListener('click', () => {
  document.body.classList.toggle('light');
  logo.style.display = 'block';
  Mainlogo.style.display = 'none';
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
