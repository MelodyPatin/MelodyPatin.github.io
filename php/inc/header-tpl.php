<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <title>Mélody Patin</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=alegreya-sans:200,300,300i,400,400i,700,700i|forum:400|lato:300,300i,400,400i,700,700i" rel="stylesheet" />
</head>

<body>
<div id="presentationPoint"></div>
<div class="bigScreen1">
    <header>
        <nav>
        <div class="languages">
            <p class="currentLanguage"><?php echo $currentLanguage; ?></p>
            <ul class="listOfLanguages">
                <?php foreach ($languagesList as $language) { ?>
                    <li >
                        <a href="#" class="languageLink" data-lang="<?php echo $language; ?>"><?php echo $language; ?></a></li>
                <?php } ?>    
            </ul>
            <img class="leftArrow" src="../Images/ICONES/ICONE_whiteLeftArrow.png" alt="Icone flèche">
            <img class="rightArrow" src="../Images/ICONES/ICONE_whiteRightArrow.png" alt="Icone flèche">
        </div>
            <h1>Mélody Patin</h1>
            <div class="hamburgerMenu">
                <?php 
                $numLines = 3;
                for ($i = 0; $i < $numLines; $i++) {
                echo '<div class="line"></div>';
                }?>
            </div>
            <div class="crossMenu">
                <div class="crossLine crossLine-1"></div>
                <div class="crossLine crossLine-2"></div>
            </div>
            <div class="menu">
                    <?php foreach($nav as $navigationLabel => $navigationLink ): ?>
                        <a href="<?=$navigationLink?>"><?=$navigationLabel?></a>
                    <?php endforeach; ?>
            </div>
            <div class="toggle-button">
                <div class="toggle-switch"></div>
                <img class="moonIcon" src="../Images/ICONES/ICONE_blueMoon.png" alt="icone lune">
            <img class="sunIcon" src="../Images/ICONES/ICONE_blueSun.png" alt="icone soleil">
            </div>
           

        </nav>
    </header>
    