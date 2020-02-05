<!DOCTYPE html>
<html lang="fr">
  <head>
  	<title>Refonte du site de JANINE</title>
  	<meta charset="utf-8">
  	<meta name="description" content="ART">
  	<meta property="og:title" content="ART ">
  	<meta property="og:type" content="website">
  	<meta property="og:url" content="">
  	<meta property="og:image" content="">
  	<meta property="og:description" content="ART">
  	<meta property="og:site_name" content="ART">
  	<meta property="og:locale" content="fr_FR">
  	<link rel="shortcut icon" href="">
  	<link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/galerie.css">
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300" rel="stylesheet">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <?php include("header.php"); ?>
    <main class="mainGaleries">
      <section class="selection">
        <div class="selectionBoxes">
          <h1>Types</h1>
          <ul class="ulSelect">
            <li class="liSelect unselected" id="Pastel">Pastel</li>
            <li class="liSelect unselected" id="Couture">Couture</li>
            <li class="liSelect unselected" id="Sac">Sac</li>
            <li class="liSelect unselected" id="Tricot">Tricot</li>
            <li class="liSelect unselected" id="Fusain">Fusain</li>
            <li class="liSelect unselected" id="Objets">Objets</li>
            <li class="liSelect unselected" id="Crayon">Crayon</li>
            <li class="liSelect unselected" id="debCrayon">Début crayon</li>
            <li class="liSelect unselected" id="Autres">Autres</li>
          </ul>
        </div>
        <div class="selectionBoxes">
          <h1>Artiste</h1>
          <ul class="ulSelect">
            <li class="liSelect unselected" id="Janine">Janine Griffault</li>
            <li class="liSelect unselected" id="Chantal">Chantal</li>
          </ul>
        </div>
      </section>
      <section class="galeriesImages">
      </section>
      <section class="modals">
      </section>
    </main>
    <script src="js/data.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
