<div class="bigScreen2-container">
<div class="bigScreen2">
    <section id="experiences">
        <div class="titleCenter">
            <h2>Expériences professionnelles</h2>
        </div>
        <?php 
        $totalExperiences = count($experiences);
        foreach ($experiences as $index => $experienceList):?>
            <div class="<?= ($index < $totalExperiences - 1) ? 'lastInfo' : 'infos' ?>">
                <p class="occupation"><?= $experienceList["occupation"];?></p>
                <p class="company"><?= $experienceList["company"];?></p>
                <p class="datePlace"><?= $experienceList["date&place"];?></p>
                <div class="work">
                    <p><?= $experienceList["work"];?></p>
                </div>
                <div class="skills">
                    <?php foreach ($experienceList["skills"] as $skill): ?>
                        <p><?= $skill;?></p>
                    <?php endforeach ?>
                </div>
            </div>
        <?php endforeach ?>
        <div id="educationPoint"></div>
    </section>