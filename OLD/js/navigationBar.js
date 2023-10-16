const navigationBar = {

    menuToggle: null,
    navLinks: null,
    crossMenu: null,
    navLinksList: null,

    init: function(){
        navigationBar.menuToggle = document.querySelector('.hamburgerMenu');
        navigationBar.navLinks = document.querySelector('.menu');
        navigationBar.crossMenu = document.querySelector('.crossMenu');
        navigationBar.navLinksList = document.querySelectorAll('.menu a');
        
        navigationBar.menuToggle.addEventListener('click', navigationBar.handleToggleNavigation); 
        navigationBar.crossMenu.addEventListener('click', navigationBar.handleCloseNavigation);
        navigationBar.navLinksList.forEach(link => link.addEventListener('click', navigationBar.handleCloseNavigation));
        window.addEventListener('resize', navigationBar.handleResize);


    }, 

    handleToggleNavigation: function() {
        navigationBar.navLinks.classList.toggle('active');
        navigationBar.menuToggle.style.display = 'none';
        navigationBar.crossMenu.style.display = 'block';
    },
    
    handleCloseNavigation: function() {
        navigationBar.navLinks.classList.remove('active');
        navigationBar.menuToggle.style.display = 'block';
        navigationBar.crossMenu.style.display = 'none';
    },
    
    handleResize: function() {
        if (window.innerWidth >= 1150) {
            navigationBar.navLinks.classList.remove('active');
            navigationBar.menuToggle.style.display = 'none';
            navigationBar.crossMenu.style.display = 'none';
        } else {
        }
        if (window.innerWidth <= 1150) {
            navigationBar.navLinks.classList.remove('active');
            navigationBar.menuToggle.style.display = 'block';
            navigationBar.crossMenu.style.display = 'none';
        } else {
        }
    },
}
