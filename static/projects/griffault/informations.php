<!DOCTYPE html>
<html lang="fr">
  <head>
   <title>Informations</title>
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
   <link rel="stylesheet" type="text/css" href="css/informations.css">
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300" rel="stylesheet">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <?php include("header.php"); ?>
    <main>
      <div class="ownerInfos">
        <h2>Mes coordonnées</h2>
        <div class="phoneNumber">
          <span><strong>Mobile</strong> : +33 6 71 31 21 71</span>
          <br/>
          <span><strong>Fixe</strong> : +33 1 71 31 21 71</span>
          <br/><br/>
          <span><strong>Email</strong> : l.bonnaves@gmail.com</span>
          <div class="myNetworks">
            <span><strong>Mes réseaux</strong></span>
            <div class="socialMedias">
              <ul>
                <li><img src="img/insta.png" alt="search"></li>
                <li><img src="img/fb.png" alt="search"></li>
                <li><img src="img/pinterest.png" alt="search"></li>
              </ul>
            </div>
          </div>
        </div>
        <img id="catInfos"src="img/catInfos.png" alt="search">
      </div>
      <div class="contactMe">
        <h2>Contactez-moi !</h2>
        <form action="mailto:someone@example.com" method="post" enctype="text/plain">
          <fieldset>
            <input type="text" name="Nom et prénom " size="66" placeholder="Votre nom et prénom" required><br>
          </fieldset>
          <fieldset>
            <input type="text" name="Email " size="66" placeholder="Votre email" required><br>
          </fieldset>
          ​<textarea id="txtArea" name="Message " rows="10" cols="50" placeholder="Votre message…" required></textarea>
          <div class="submitButton">
            <input type="submit" value="Envoyer">
          </div>
        </form>
      </div>
    </main>
  </body>
</html>
