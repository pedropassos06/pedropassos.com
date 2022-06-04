<?php

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$message = addslashes($_POST['message']);

$to = "pccp001@bucknell.edu";
$subject = "Contact - From Website";
$body = "Name: ".$nome. "\r\n".
        "Email: ".$email."\r\n".
        "Message: ".$message;

$header = "From:pedropassos@gmail.com"."\r\n".
            "Reply-To:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();


if (mail($to, $subject, $body, $header)) {
    echo("Email sent successfully!");
} else {
    echo("Something went wrong.");
}

?>