<?php
require_once('PHPMailerAutoload.php');

$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["mensaje"]);

if($name !=null && $message!=null && $email!=null)
{
   
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    
    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'joelh3386@gmail.com';                     // SMTP username
        $mail->Password   = 'jya300591';                               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 465;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('joelh3386@gmail.com', 'Mailer');
        $mail->addAddress('joelh3386@gmail.com', 'Joe User');     // Add a recipient
        $mail->addReplyTo($email, $name);
    
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'Name:'.$name. '<br/>Message:' .$message;
    
       If(!$mail->send()){
        $signal='bad';
        $msg ="Mailer error:" .$mail->ErrorInfo;
        
       }

       else
       {
        $signal='ok';
        $msg ="Form Sent:" .$mail->ErrorInfo;
       }

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

else
{
    $signal = "bad";
    $msg ="Please fill all required fills";
}

$data = array(
    'signal' => $signal,
    'msg' => $msg
);

echo json_encode($data);


?>