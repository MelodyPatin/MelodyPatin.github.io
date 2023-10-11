<section id="presentation">
    <div class="picture">
        <div class="textBox">
            <p>Bonjour,</p>
            <p>Je suis Mélody </p>
            <p>Je suis une future développeuse web</p>
        </div>
            <img class="profilImage" src="../Images/PROFIL/PROFIL_bleu_carre.png" alt="Ma photo de profil">
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