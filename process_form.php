<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data and sanitize it
    $firstname = isset($_POST['firstname']) ? strip_tags(trim($_POST['firstname'])) : '';
    $lastname = isset($_POST['lastname']) ? strip_tags(trim($_POST['lastname'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $subject = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Validation
    $errors = [];
    if (empty($firstname)) {
        $errors[] = "Fornavn er påkrævet.";
    }
    if (empty($lastname)) {
        $errors[] = "Efternavn er påkrævet.";
    }
    if (empty($email)) {
        $errors[] = "Email er påkrævet.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email er ikke gyldig.";
    }
    if (empty($message)) {
        $errors[] = "Besked er påkrævet.";
    }

    // If there are validation errors, display them
    if (!empty($errors)) {
        echo "<h3>Der opstod fejl:</h3>";
        foreach ($errors as $error) {
            echo "<p>- $error</p>";
        }
        exit;
    }

    // Prepare email
    $recipient = "dannebro13@hotmail.com"; // Replace with your email
    $email_subject = "Ny kontaktformular besked fra $firstname $lastname";
    $email_body = "Du har modtaget en ny besked:\n\n".
                  "Navn: $firstname $lastname\n".
                  "Email: $email\n".
                  "Telefon: $phone\n".
                  "Emne: $subject\n\n".
                  "Besked:\n$message";

    $headers = "From: $firstname $lastname <$email>";

    // Send email
    if (mail($recipient, $email_subject, $email_body, $headers)) {
        echo "Tak for din besked! Vi vender tilbage hurtigst muligt.";
    } else {
        echo "Der opstod en fejl under afsendelse af beskeden. Prøv igen senere.";
    }
} else {
    // Prevent direct access to the script
    header("HTTP/1.1 403 Forbidden");
    echo "Du har ikke adgang til denne side.";
}
