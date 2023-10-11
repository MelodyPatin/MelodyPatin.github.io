<?php

//HEADER

$nav = [
    "Présentation"=>"#presentationPoint",
    "Expériences"=> "#experiencesPoint",
    "Expériences " => "#experiences",
    "Formations"=>"#educationPoint",
    "Compétences"=>"#skillsPoint",
    "Portfolio"=>"#portfolioPoint",
    "Loisirs"=>"#hobbiesPoint",
];

//PRESENTATION

$contact = [
    "<p>Contactez-moi</p>"=>"",
    "patin.melody@gmail.com"=>"mailto:patin.melody@gmail.com",
    "06 99 42 83 22"=>"tel:06 99 42 83 22",
    "Crozon, France"=>"",
];

$social = [
    "LinkedIn"=>"https://fr.linkedin.com/in/melody-patin",
    "GitHub"=>"https://github.com/MelodyPatin",
    "Instagram"=>"https://www.instagram.com/melody.patin/",
];

//EXPERIENCES 

$experiences = [
    "experience1" => [
        "occupation" => "Assistante de galerie", 
        "company"=>"Galerie Lelong & Co.",
        "date&place"=>"Paris, avril 2018 - juin 2023",
        "work"=>"<p>Relation client (suivi commercial : vente, facturation, livraison)</p>
        <p>Organisation d'événements, préparation des foires </p>
        <p>Emballage d’œuvres </p>
        <p>Mise en place des scénographies </p>
        <p>Gestion de la base de données et du site internet </p>
        <p>Relation presse</p>",
        "skills" => ["FileMaker","SketchUp",],
    ],
    "experience2" => [
        "occupation" => "Fille au pair", 
        "company"=>"Famille C.",
        "date&place"=>"Sheffields, Royaume-Uni <br> octobre 2017 – mars 2018",
        "work"=>"<p>Pratique quotidienne de l'anglais</p>",
        "skills" => ["Anglais"],
    ]
];

// FORMATIONS

$educations = [
    "education1" => [
        "occupation" => "Formation Développeur web et web mobile", 
        "company"=>"O'Clock",
        "date&place"=>"Téléprésentiel, septembre 2023 - février 2024",
        "work"=>"<p>Maquetter une application</p>
        <p>Réaliser une interface utilisateur web statique et adaptable</p>
        <p>Développer une interface utilisateur web dynamique</p>
        <p>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</p>
        <p>Créer une base de données</p>
        <p>Développer les composants d’accès aux données</p>
        <p>Développer la partie back-end d’une application web ou web mobile</p>
        <p>Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</p>",
        "skills" => ["HTML", "CSS", "PHP", "MySQL", "Javascript", "React", "SEO"],
        ],
    "education2" => [
        "occupation" => "Master professionnel Histoire de l'art : Conservation, gestion et diffusion
        des œuvres d'art des XXe et XXIe siècles", 
        "company"=>"Université Paul Valéry",
        "date&place"=>"Montpellier, 2015 – 2017",
        "work"=>"<p>Mention bien</p>
        <p>Membre de l'association Carbone 14 : montage d'une exposition d'art contemporain</p>
        <p>Mémoire de recherche : L'exposition organisée par l'artiste : une pratique contemporaine entre
            espaces alternatifs et institutionnels.</p>
        <p>Stage médiation et régie des oeuvres, L.A.C. (Lieu d'Art Contemporain), Sigean (août 2016)</p>
        <p>Stage de fin d'étude : assistante de galerie, Galerie Lelong & Co., Paris (fev. - juin 2017)</p>
        <p>Mémoire de stage : La diffusion de l'art contemporain en galerie</p>",
        "skills" => ["Rédaction"],
    ],
    "education3" => [
        "occupation" => "Licence Histoire Parcours administration", 
        "company"=>"Université de Bretagne Occidentale",
        "date&place"=>"Brest, 2012 – 2015",
        "work"=>"<p>Mention bien</p>
        <p>Erasmus à l'UCA (Cadix, Espagne, 2014-2015)</p>",
        "skills" => ["Espagnol"],
    ],
];

// COMPETENCES
$skills = [
    "HTML5" => "HTML",
    "CSS3" => "CSS3",
    "PHP" => "PHP",
    "JavaScript" => "JavaScript",
    "SketchUp" => "SketchUp",
    "FileMaker" => "FileMaker",
];

$languages = [
    "Français" => "fr",
    "Anglais" => "eng",
    "Espagnol" => "es",
    "Italien" => "it",
];

// LOISIRS
$hobbies = [
    "Voyages" => "../Images/ICONES/ICONE_voyage.png",
    "Art, visite de musées et galeries" => "../Images/ICONES/ICONE_musee.png",
    "Randonnée" => "../Images/ICONES/ICONE_randonnee.png",
];

?>