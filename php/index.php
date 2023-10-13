
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../js/animationSkills.js"></script> 
<script src="../js/languagesThemes.js"></script> 
<script src="../js/languagesBar.js"></script> 
<script src="../js/scaleText.js"></script> 
<script src="../js/darkMode.js"></script> 
<script src="../js/navigationBar.js"></script> 
<script src="../js/translation.js"></script> 
<script src="../js/app.js"></script> 



<?php
    $languageData = "FR";
    if (isset($_GET['lang'])) {
        $selectedLang = $_GET['lang'];
    
        if (in_array($selectedLang, ['FR', 'EN'])) {
            $languageData = $selectedLang;
        }
    }

    include "data_" . $languageData . ".php";
    include "inc/header-tpl.php";
    include "inc/presentation-tpl.php";
    include "inc/experiences-tpl.php";
    include "inc/formations-tpl.php"; 
    include "inc/competences-tpl.php"; 
    include "inc/portfolio-tpl.php";
    include "inc/loisirs-tpl.php";
    include "inc/footer-tpl.php";
?>

    