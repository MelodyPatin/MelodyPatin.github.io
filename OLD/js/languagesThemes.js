const languagesThemes = {

    body : null,
    currentLanguageElement: null,
    storedTheme : "FR",

    init: function() {

        languagesThemes.body = document.querySelector("body");
        languagesThemes.currentLanguageElement = document.querySelector(".currentLanguage");

        const languages = document.querySelectorAll(".languageLink");
        for (language of languages){
        language.addEventListener("click", languagesThemes.handleLanguagesThemes);}

/* A REVOIR : gerer les langues au refresh de la page*/
        languagesThemes.storedTheme = localStorage.getItem("selectedTheme");
        if (languagesThemes.storedTheme) {
            languagesThemes.handleLanguagesThemes();
        }
    }, 
    handleLanguagesThemes : function(){
        const selectedLanguage = languagesThemes.currentLanguageElement.textContent.trim();
        languagesThemes.body.classList.remove("ES", "FR", "EN", "IT")
        languagesThemes.body.classList.add(selectedLanguage);
        
/* A REVOIR : gerer les langues au refresh de la page*/
        localStorage.setItem("selectedTheme", selectedLanguage);

        if (darkMode.body.classList.contains("EN") && !darkMode.body.classList.contains("darkmode")) {
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_green.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_greenMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_greenSun.png';
        }
        if (darkMode.body.classList.contains("ES")&& !darkMode.body.classList.contains("darkmode")){
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_yellow.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_yellowMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_yellowSun.png';
        } 
        if (darkMode.body.classList.contains("IT")&& !darkMode.body.classList.contains("darkmode")){
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_red.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_redMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_redSun.png';
        } 
        if (darkMode.body.classList.contains("FR")&& !darkMode.body.classList.contains("darkmode")){
            darkMode.profilImage.src = '../Images/PROFIL/PROFIL_blue.png';
            darkMode.moonIcon.src = '../Images/ICONES/ICONE_blueMoon.png';
            darkMode.sunIcon.src = '../Images/ICONES/ICONE_blueSun.png';
        }
    }
        
}

