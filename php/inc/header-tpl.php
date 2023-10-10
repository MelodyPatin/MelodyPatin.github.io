<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style3.css">
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
            <h1>Mélody Patin</h1>
            <input type="checkbox" class="navbarCheckbox">
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
        </nav>
    </header>
    