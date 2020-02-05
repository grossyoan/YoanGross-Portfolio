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
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300" rel="stylesheet">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <?php include("header.php"); ?>
    <main>
      <section class="carrousel">
        <div class="carrouselImages">
          <img src="img/banner.jpg" alt="search">
        </div>
        <div class="categoryCircle">
          <div class="circleContainer">
            <a class="buttonCircle" href="#">
              <img src="img/pastel.png" alt="search">
            </a>
            <span>PASTEL</span>
          </div>
          <div class="circleContainer">
            <a class="buttonCircle" href="#">
              <img src="img/peinture.png" alt="search">
            </a>
            <span>PEINTURE</span>
          </div>
          <div class="circleContainer">
            <a class="buttonCircle" href="#">
              <img src="img/couture.png" alt="search">
            </a>
            <span>COUTURE</span>
          </div>
          <div class="circleContainer">
            <a class="buttonCircle" href="#">
              <img src="img/tricot.png" alt="search">
            </a>
            <span>TRICOT</span>
          </div>
        </div>
      </section>
    </main>
    <script src="js/main.js"></script>
  </body>
</html>
