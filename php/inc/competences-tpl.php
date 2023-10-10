<section id="skills">
    <div class="titleCenter">
        <h2>Compétences</h2>
    </div>
    <div class="proSkills">
        <?php foreach ($skills as $skill => $skillClass): ?>
        <div class="flex">
            <p><?=$skill?></p>
            <div class="pourcentage">
                <div class="backgroundMask backgroundMask--<?=$skillClass?>"></div>
            </div>
        </div>
        <?php endforeach ?>
    </div>
    <div class="languageSkills">
        <?php foreach ($languages as $language => $languageClass):?>
        <div class="circleWrap">
            <div class="circle">  
                <div class="mask full full_<?=$languageClass?>">
                    <div class="fill fill_<?=$languageClass?>"></div>
                </div>
                <div class="mask">
                    <div class="fill fill_<?=$languageClass?>"></div>
                </div>
                <div class="insideCircle"><?=$language?></div>
            </div>
        </div>
        <?php endforeach ?>
    </div>
    <div id="portfolioPoint"></div>
</section>