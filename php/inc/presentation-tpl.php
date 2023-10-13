<section id="presentation">
    <div class="picture">
        <div class="textBox">
            <p><?=$text[0]?></p>
            <p><?=$text[1]?></p>
            <p><?=$text[2]?></p>
        </div>
            <img class="profilImage" src="../Images/PROFIL/PROFIL_blue.png" alt="Ma photo de profil">
    </div>
    <div class="contact">
        <div class="contactList">
            <?php foreach($contact as $contactLabel => $contactLink ): ?>
                <a id="profilImage" href="<?=$contactLink?>"><?=$contactLabel?></a><br>
            <?php endforeach ?>
        </div>
        <div class="socialMedia">
            <?php foreach($social as $socialLabel => $socialLink ): ?>
                <a href="<?=$socialLink?>" target="_blank"><?=$socialLabel?></a>
            <?php endforeach ?>
        </div>
    </div>
    <div id="experiencesPoint"></div>
</section>
</div>