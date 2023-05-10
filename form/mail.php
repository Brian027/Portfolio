<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$name = trim(stripslashes($_POST['contactName']));
$email = trim(stripslashes($_POST['contactEmail']));
$subject = trim(stripslashes($_POST['contactSubject']));
$contact_message = trim(stripslashes($_POST['contactMessage']));

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'contact@brian-coupama.fr';                     //SMTP username
    $mail->Password   = '3Fac?6065';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                                      //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    // Charset
    $mail->CharSet = "utf-8";

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('contact@brian-coupama.fr');     //Add a recipient //Name is optional

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = ($_POST['contactSubject']);
    $mail->Body    = ($_POST['contactMessage']);

    $mail->send();
    echo 'Le message a bien été envoyer!';
} catch(Exception $e){
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

// require('Recaptcha/recaptcha/autoload.php');

// $siteOwnersEmail = 'contact@brian-coupama.fr';
// $message = "";
// $error = [];

// if ($_POST) {

//   $name = trim(stripslashes($_POST['contactName']));
//   $email = trim(stripslashes($_POST['contactEmail']));
//   $subject = trim(stripslashes($_POST['contactSubject']));
//   $contact_message = trim(stripslashes($_POST['contactMessage']));

//   // Check Name
//   if (strlen($name) < 2) {
//     $error['name'] = "Veuillez saisir votre nom.";
//   }
//   // Check Email
//   if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
//     $error['email'] = "Veuillez saisir une email valide.";
//   }
//   // Check Message
//   if (strlen($contact_message) < 15) {
//     $error['message'] = "Veuillez saisir votre message. Il doit contenir au moins 15 caractères.";
//   }
//   // Subject
//   if ($subject == '') {
//     $subject = "Veuillez saisir l'objet de votre message.";
//   }
//   if (isset($_POST['g-recaptcha-response'])) {
//     $recaptcha = new \ReCaptcha\ReCaptcha('6LeqrkAfAAAAAK10R3x_yi8-dUBa9k9wPMtT4-XG');
//     $resp = $recaptcha->verify($_POST['g-recaptcha-response']);
//     if ($resp->isSuccess()) {
      
//     } else {
//       echo 'Captcha invalide';
//     }
//   } else {
//     echo 'Captcha non rempli';
//   }


//   // Set Message
//   $message .= "Email from: " . $name . "<br />";
//   $message .= "Email address: " . $email . "<br />";
//   $message .= "Message: <br />";
//   $message .= $contact_message;
//   $message .= "<br /> ----- <br /> Vous avez reçu un message depuis le formulaire de contact de votre site web. <br />";

//   // Set From: header
//   $from =  $name . " <" . $email . ">";

//   // Email Headers
//   $headers = "From: " . $from . "\r\n";
//   $headers .= "Reply-To: " . $email . "\r\n";
//   $headers .= "MIME-Version: 1.0\r\n";
//   $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


//   if (!$error) {

//     ini_set("sendmail_from", $siteOwnersEmail); // for windows server
//     $mail = mail($siteOwnersEmail, $subject, $message, $headers);

//     if ($mail) {
//       echo "OK";
//     } else {
//       echo "Le message n'a pu être envoyer";
//     }
//   } # end if - no validation error

//   else {

//     $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
//     $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
//     $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;

//     echo $response;
//   } # end if - there was a validation error

// }
?>

