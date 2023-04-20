<?php

require('Recaptcha/recaptcha/autoload.php');

$siteOwnersEmail = 'contact@brian-coupama.fr';
$message = "";
$error = [];

if ($_POST) {

  $name = trim(stripslashes($_POST['contactName']));
  $email = trim(stripslashes($_POST['contactEmail']));
  $subject = trim(stripslashes($_POST['contactSubject']));
  $contact_message = trim(stripslashes($_POST['contactMessage']));

  // Check Name
  if (strlen($name) < 2) {
    $error['name'] = "Veuillez saisir votre nom.";
  }
  // Check Email
  if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
    $error['email'] = "Veuillez saisir une email valide.";
  }
  // Check Message
  if (strlen($contact_message) < 15) {
    $error['message'] = "Veuillez saisir votre message. Il doit contenir au moins 15 caractères.";
  }
  // Subject
  if ($subject == '') {
    $subject = "Veuillez saisir l'objet de votre message.";
  }
  if (isset($_POST['g-recaptcha-response'])) {
    $recaptcha = new \ReCaptcha\ReCaptcha('6LeqrkAfAAAAAK10R3x_yi8-dUBa9k9wPMtT4-XG');
    $resp = $recaptcha->verify($_POST['g-recaptcha-response']);
    if ($resp->isSuccess()) {
      
    } else {
      echo 'Captcha non rempli';
    }
  } else {
    echo 'Captcha Invalide';
  }


  // Set Message
  $message .= "Email from: " . $name . "<br />";
  $message .= "Email address: " . $email . "<br />";
  $message .= "Message: <br />";
  $message .= $contact_message;
  $message .= "<br /> ----- <br /> Vous avez reçu un message depuis le formulaire de contact de votre site web. <br />";

  // Set From: header
  $from =  $name . " <" . $email . ">";

  // Email Headers
  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


  if (!$error) {

    ini_set("sendmail_from", $siteOwnersEmail); // for windows server
    $mail = mail($siteOwnersEmail, $subject, $message, $headers);

    if ($mail) {
      echo "OK";
    } else {
      echo "Le message n'a pu être envoyer";
    }
  } # end if - no validation error

  else {

    $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
    $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
    $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;

    echo $response;
  } # end if - there was a validation error

}





































































// Replace this with your own email address
// $message = "";
// $error = [];
// $formulaire = true;

// if ($_POST) {

//   $name = trim(stripslashes($_POST['contactName']));
//   $email = trim(stripslashes($_POST['contactEmail']));
//   $siteOwnersEmail = 'contact@brian-coupama.fr';
//   $subject = trim(stripslashes($_POST['contactSubject']));
//   $contact_message = trim(stripslashes($_POST['contactMessage']));

  // Check Name
  // if (strlen($name) < 2) {
  //   $error['name'] = "Veuillez saisir votre nom.";
  //   $formulaire = false;
  // }
  // // Check Email
  // if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
  //   $error['email'] = "Veuillez saisir une adresse email valide.";
  //   $formulaire = false;
  // }
  // Check Message
  // if (strlen($contact_message) < 15) {
  //   $error['message'] = "Veuillez saisir votre message. Il doit contenir au moins 15 caractères.";
  //   $formulaire = false;
  // }
  // if($formulaire){

  
  // Subject
  // if ($subject == '') {
  //   $subject = "Contact Form Submission";
  // }

  // Set Message
  // $message .= "Email from: " . $name . "<br>";
  // $message .= "Adresse email: " . $email . "<br>";
  // $message .= "Message: <br>";
  // $message .= $contact_message;
  // $message .= "<br> ----- <br> Vous avez reçu un message depuis le formulaire de contact de votre site web. <br>";

  // Set From: header
  // $from =  $name . " <" . $email . "> ";

  // Email Headers
  // $headers = "From: " . $from . "\r\n";
  // $headers .= "Reply-To: " . $email . "\r\n";
  // $headers .= "MIME-Version: 1.0\r\n";
  // $headers .= "Content-Type: text/html; charset=utf-8\r\n";


  // if (!$error) {

  //   ini_set("sendmail_from", $siteOwnersEmail); // for windows server
  //   $mail = mail($siteOwnersEmail, $subject, $message, $headers);

  //   if ($mail) {
  //     echo "OK";
  //   } else {
  //     echo "Something went wrong. Please try again.";
  //   }
  // } # end if - no validation error

  // else {

  //   $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
  //   $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
  //   $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;

  //   echo $response;
  // } # end if - there was a validation error

//}

//}
?>