/*const changeLanguage = {
    init: function() {
        
        // Obtenez la langue actuelle à partir du stockage local
        const currentLanguage = localStorage.getItem('currentLanguage');

        // Chargez les données de langue initiales
        changeLanguage.loadLanguageData(currentLanguage);
    },

    loadLanguageData: function(language) {
        // Utilisez la langue actuelle pour charger les données de langue appropriées
        fetch('php/data_' + language + '.php')
            .then(response => response.text())
            .then(data => {
                // Utilisez les données de langue pour mettre à jour les éléments
                // de votre page (par exemple, le contenu du menu)
                // Assurez-vous que le contenu de data-fr.php ou data-en.php est correctement structuré.
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données de langue : ', error);
            });
    }
};*/