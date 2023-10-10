var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Envoyer la largeur de l'écran au serveur
$.ajax({
    url: '../php/index.php',
    method: 'POST',
    data: { screenWidth: screenWidth },
    success: function(response) {
        $('.menu').html(response);
    }
});