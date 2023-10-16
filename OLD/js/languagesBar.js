const languagesBar = {
    languagesButton: null,
    currentLanguageElement: null,
    listOfLanguagesElement: null,
    leftArrowElement: null,
    rightArrowElement: null,
    currentLanguage: null,

    init: function () {
        languagesBar.languagesButton = document.querySelector(".languages");
        languagesBar.currentLanguageElement = document.querySelector(".currentLanguage");
        languagesBar.listOfLanguagesElement = document.querySelector(".listOfLanguages");
        languagesBar.leftArrowElement = document.querySelector(".leftArrow");
        languagesBar.rightArrowElement = document.querySelector(".rightArrow");
        languagesBar.currentLanguage = "FR"; // Langue de base

        languagesBar.languagesButton.addEventListener("click", function (event) {
            event.stopPropagation();
            languagesBar.handleLanguagesButton();
        });

        // Ajoutez un écouteur de clic à chaque lien de langue
        document.querySelectorAll(".languageLink").forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const newLanguage = link.getAttribute("data-lang");
                languagesBar.updateLanguage(newLanguage);
            });
        });

        // Ajoutez un gestionnaire d'événement de clic au document pour fermer le bouton en dehors du bouton des langues
        document.addEventListener("click", function (event) {
            if (!languagesBar.languagesButton.contains(event.target)) {
                languagesBar.closeLanguagesButton();
            }
        });
    },

    handleLanguagesButton: function () {
        const isExpanded = languagesBar.languagesButton.classList.contains("languages-active");

        if (isExpanded) {
            languagesBar.closeLanguagesButton();
        } else {
            languagesBar.openLanguagesButton();
        }
    },

    openLanguagesButton: function () {
        languagesBar.languagesButton.classList.add("languages-active");
        languagesBar.listOfLanguagesElement.style.display = "flex";
        languagesBar.leftArrowElement.style.display = "block";
        languagesBar.rightArrowElement.style.display = "none";
    },

    closeLanguagesButton: function () {
        languagesBar.languagesButton.classList.remove("languages-active");
        languagesBar.listOfLanguagesElement.style.display = "none";
        languagesBar.leftArrowElement.style.display = "none";
        languagesBar.rightArrowElement.style.display = "block";
    },

    // Fonction pour mettre à jour la langue actuelle
    updateLanguage: function (newLanguage) {
        if (newLanguage !== languagesBar.currentLanguage) {
            // Échangez la langue actuelle avec la langue sélectionnée
            const selectedLanguageElement = document.querySelector(".languageLink[data-lang='" + newLanguage + "']");
            if (selectedLanguageElement) {
                const selectedLanguage = selectedLanguageElement.textContent;
                selectedLanguageElement.textContent = languagesBar.currentLanguage;
                selectedLanguageElement.setAttribute("data-lang", languagesBar.currentLanguage);
                languagesBar.currentLanguage = newLanguage;
    
                // Mettez à jour la langue actuelle sur the page
                languagesBar.currentLanguageElement.textContent = languagesBar.currentLanguage;
            }
        }
    },
};


/* REVOIR

Il faut rajouter une fonction pour que la langue sélectionné reste selectionnée au refresh de la page
Il faudra peut être changer le html en ne faisant qu'une seule liste et avec le nthchild en css définir des propriétés
particulières pour le premier élément de cette liste (à gauche) et le reste à droite?)

Puis au click sur telle ou telle langue il faudra modifier le thème ainsi que les datas dans la langue souhaitée*/

