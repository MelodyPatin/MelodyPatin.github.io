<section id="hobbies">
    <div class="titleCenter">
        <h2><?=$sectionTitles[4]?></h2>
    </div>
    <div class="hobbies">
        <?php foreach($hobbies as $hobbieLabel => $hobbiesImg): ?>
            <div class="icon">
                <img src="<?=$hobbiesImg?>" alt="Icone voyage">
                <p><?=$hobbieLabel?></p>
                <img class="img2" src="<?=$hobbiesImg?>" alt="Icone voyage">
            </div>
        <?php endforeach ?>
    </div>
</section>
