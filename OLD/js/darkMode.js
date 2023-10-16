const darkMode = {
    
    isDarkMode: false,
    body : null,
    toggleSwitch : null,
    profilImage : null,
    moonIcon : null,
    sunIcon : null,

    init: function() {

        darkMode.body = document.querySelector("body");
        darkMode.toggleSwitch = document.querySelector(".toggle-switch");
        darkMode.profilImage = document.querySelector(".profilImage");
        darkMode.moonIcon = document.querySelector(".moonIcon");
        darkMode.sunIcon = document.querySelector(".sunIcon");

        const toggleButton = document.querySelector(".toggle-button");
        toggleButton.addEventListener('click', darkMode.handleDarkMode);

        darkMode.isDarkMode = localStorage.getItem('darkModeEnabled') === 'true';

        // Appliquez initialement le mode sombre si nécessaire
        if (darkMode.isDarkMode) {
            darkMode.enableDarkMode();
        }
    },

    handleDarkMode: function() {
        darkMode.isDarkMode = !darkMode.isDarkMode;
        if (darkMode.isDarkMode) {
            darkMode.enableDarkMode();
        } else {
            darkMode.disableDarkMode();
        }
    },

    enableDarkMode: function() {
        darkMode.body.classList.remove("ES", "FR", "EN", "IT")
        darkMode.body.classList.add('darkmode');
        darkMode.toggleSwitch.style.transform = 'translateX(38px)';
        darkMode.profilImage.src = '../Images/PROFIL/PROFIL_white.png';
        darkMode.moonIcon.src = '../Images/ICONES/ICONE_darkMoon.png';
        darkMode.sunIcon.src = '../Images/ICONES/ICONE_darkSun.png';

        localStorage.setItem('darkModeEnabled', 'true');
    },

    disableDarkMode: function() {
        darkMode.body.classList.remove('darkmode');
        const selectedLanguage = languagesThemes.currentLanguageElement.textContent.trim();
        darkMode.body.classList.remove("ES", "FR", "EN", "IT")
        darkMode.body.classList.add(selectedLanguage);
        darkMode.toggleSwitch.style.transform = 'translateX(0)';

        if (darkMode.body.classList.contains("EN") ) {
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_green.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_greenMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_greenSun.png';
        }
        if (darkMode.body.classList.contains("ES")){
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_yellow.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_yellowMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_yellowSun.png';
        } 
        if (darkMode.body.classList.contains("IT")){
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_red.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_redMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_redSun.png';
        } 
        if (darkMode.body.classList.contains("FR")){
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_blue.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_blueMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_blueSun.png';
        }

        localStorage.setItem('darkModeEnabled', 'false');
    },
};





