function initNavigation() {

const menuToggle = document.querySelector('.hamburgerMenu');
const navLinks = document.querySelector('.menu');
const crossMenu = document.querySelector('.crossMenu');
const navLinksList = document.querySelectorAll('.menu a');


menuToggle.addEventListener('click', handleToggleNavigation); 

function handleToggleNavigation() {
    navLinks.classList.toggle('active');
    menuToggle.style.display = 'none';
    crossMenu.style.display = 'block';
};

crossMenu.addEventListener('click', handleCloseNavigation);

function handleCloseNavigation() {
    navLinks.classList.remove('active');
    menuToggle.style.display = 'block';
    crossMenu.style.display = 'none';
};

navLinksList.forEach(link => link.addEventListener('click', handleCloseNavigation));

window.addEventListener('resize', handleResize);

function handleResize() {
    if (window.innerWidth >= 1150) {
        navLinks.classList.remove('active');
        menuToggle.style.display = 'none';
        crossMenu.style.display = 'none';
    } else {
    }
    if (window.innerWidth <= 1150) {
        navLinks.classList.remove('active');
        menuToggle.style.display = 'block';
        crossMenu.style.display = 'none';
    } else {
    }
};
}

function initDarkMode() {
    const toggleButton = document.querySelector(".toggle-button");
    let isDarkMode = localStorage.getItem('darkModeEnabled') === 'true';
  
    // Appliquez initialement le mode sombre si nécessaire
    if (isDarkMode) {
      enableDarkMode();
    }
  
    toggleButton.addEventListener('click', handleDarkMode);
  
    function handleDarkMode() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }
  
    function enableDarkMode() {
      const body = document.querySelector("body");
      const toggleSwitch = document.querySelector(".toggle-switch");
      let profilImage = document.querySelector(".profilImage");
      let moonIcon = document.querySelector(".moonIcon");
      let sunIcon = document.querySelector(".sunIcon");
  
      body.classList.add('darkmode');
      toggleSwitch.style.transform = 'translateX(28px)';
      profilImage.src = '../Images/PROFIL/PROFIL_greyOnGrey_carre.png';
      moonIcon.src = '../Images/ICONES/ICONE_darkMoon.png';
      sunIcon.src = '../Images/ICONES/ICONE_darkSun.png';
  
      // Enregistrez l'état du mode sombre dans le stockage local
      localStorage.setItem('darkModeEnabled', 'true');
    }
  
    function disableDarkMode() {
      const body = document.querySelector("body");
      const toggleSwitch = document.querySelector(".toggle-switch");
      let profilImage = document.querySelector(".profilImage");
      let moonIcon = document.querySelector(".moonIcon");
      let sunIcon = document.querySelector(".sunIcon");
  
      body.classList.remove('darkmode');
      toggleSwitch.style.transform = 'translateX(0)';
      profilImage.src = '../Images/PROFIL/PROFIL_bleu_carre.png';
      moonIcon.src = '../Images/ICONES/ICONE_blueMoon.png';
      sunIcon.src = '../Images/ICONES/ICONE_blueSun.png';
  
      // Enregistrez l'état du mode sombre dans le stockage local
      localStorage.setItem('darkModeEnabled', 'false');
    }
  }
  
  document.addEventListener("DOMContentLoaded", function(){
      initNavigation();
      initDarkMode();
  });