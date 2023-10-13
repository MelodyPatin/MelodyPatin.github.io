<section id="education">
    <div class="titleCenter">
        <h2><?=$sectionTitles[1]?></h2>
    </div>
    <?php foreach ($educations as $education => $educationList):?>
        <div class="infos">
            <p class="occupation"><?= $educationList["occupation"];?></p>
            <p class="company"><?= $educationList["company"];?></p>
            <p class="datePlace"><?= $educationList["date&place"];?></p>
            <div class="work">
                <p><?= $educationList["work"];?></p>
            </div>
            <div class="skills">
                <?php foreach ($educationList["skills"] as $skill): ?>
                    <p><?= $skill;?></p>
                <?php endforeach ?>
            </div>
        </div>
    <?php endforeach ?>
    <div id="skillsPoint"></div>
</section>