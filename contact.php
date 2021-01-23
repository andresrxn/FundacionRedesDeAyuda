<?php





use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'php/Exception.php';
require 'php/PHPMailer.php';
require 'php/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);


$post = (isset($_POST['name']) && !empty($_POST['name'])) &&
        (isset($_POST['email']) && !empty($_POST['email'])) &&
        (isset($_POST['select']) && !empty($_POST['select'])) &&
        (isset($_POST['msg']) && !empty($_POST['msg']));
   
   
    if($post){
 
        $name = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]);
        $subject = htmlspecialchars ($_POST["select"]);
        $msg = htmlspecialchars ($_POST["msg"]);

        $body = "Mensaje: <br>" . $msg  . "<br><br>Correo Electrónico: "
        . $email . "<br><br><br> Enviado desde la Página Web de Redes de Ayuda.";
            try {
                //Server settings
                $mail->SMTPDebug = 0;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'carlosraxon019@gmail.com';                     // SMTP username
                $mail->Password   = 'nenenene';                               // SMTP password
                $mail->SMTPSecure =' PHPMailer::ENCRYPTION_STARTTLS';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            
                //Recipients
                $mail->setFrom($email, $name);
                $mail->addAddress('craxonc@miumg.edu.gt'); 
                $mail->addReplyTo($email );
                // Add a recipient
                        // Name is optional
            
            
    
                // Attachments
            // Optional name
    
                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = $subject;
                $mail->Body    = $body;
                $mail->CharSet    = 'UTF-8';
                $mail->SMTPOptions = array(
                    'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                    )
                    );
                $mail->send();
                echo 
                // header('Location: https://www.example.com/');
                header('Location: php/enviado.html');
    
            exit;
            } catch (Exception $e) {
                
                header('Location: php/no-enviado.html');
            }
    }else{
        header("Location: index.html#contact");
    }

   

?>