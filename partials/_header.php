<?php require_once('config.php'); ?>

<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title> Accueil < <?= NOM_SITE ?> </title>

    <link rel="stylesheet" href="assets/css/normalise.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/4d8e7503ba.js" crossorigin="anonymous"></script>
</head>

<body>

<nav class="menu">

    <div class="menu__navigation">
        <div class="logo">
            <a href="#">
                <img src="assets/img/logo.png" alt="Logo de <?= NOM_SITE ?>">
            </a>
            <button class="burger-btn"><span></span></button>
        </div>

        

        <div class="menu__liens">
            <a href="#">Qui sommes-nous ?</a>
            <div class="menu__liens_right">
                <a href="#">Nous contacter</a>
                <a href="#" title="Redirection vers votre compte client"><i class="fas fa-user"></i></a>
                <a href="#" title="Redirection vers votre panier boutique"><i class="fas fa-shopping-basket"></i></a>
            </div>
        </div>
    </div>

</nav>