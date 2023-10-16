
 /*const animationSkills = {
    init: function() {
       
}} 
        
        
        
       const proSkills = document.querySelector('.proSkills');
        const backgroundMasks = proSkills.querySelectorAll('.backgroundMask');
        let animationStarted = false;

        function startAnimation() {
            backgroundMasks.forEach(mask => {
                mask.style.animation = 'revealBackground 6s linear forwards';
            });
        }

        function handleScroll() {
            if (!animationStarted && isElementInViewport(proSkills)) {
                startAnimation();
                animationStarted = true;
                console.log("youhou");
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Appel initial pour vérifier si l'animation doit être déclenchée
        handleScroll();
    }
};

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}
*/