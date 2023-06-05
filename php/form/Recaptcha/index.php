<?php
require('recaptcha/autoload.php');

if(isset($_POST['submitpost'])) {
  if(isset($_POST['g-recaptcha-response'])) {
    $recaptcha = new \ReCaptcha\ReCaptcha('6LeqrkAfAAAAAK10R3x_yi8-dUBa9k9wPMtT4-XG');
    $resp = $recaptcha->verify($_POST['g-recaptcha-response']);
    if ($resp->isSuccess()) {
      var_dump('Captcha Valide');
    } else {
      var_dump('Captcha Invalide');
    } 
  } else {
      var_dump('Captcha non rempli');
  }
}
?>

<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey="6LeqrkAfAAAAAOK09poOyl0dAwM4FXZQ00lB4Zyq"></div>
      <br/>
      <input type="submit" value="Envoyer" name="submitpost">
    </form>
  </body>
</html>