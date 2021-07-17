//SELECTORS!
const logo = document.getElementById('logo2');
const Mainlogo = document.getElementById('logo1');
const navItems = document.querySelector('.nav-items');
const menu = document.querySelector('.menu');
const navBar = document.querySelector('nav');

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

//AOS
AOS.init();
