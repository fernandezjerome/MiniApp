<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    if ($_POST) {
        $recipient = "fernandezjerome0824@gmail.com";
        $subject = 'Message from Portfolio';
        $visitor_name         = "";
        $visitor_fname  = "";
        $visitor_lname  = "";
        $visitor_email        = "";
        $message      = "";
        $fail = array();
        $email_pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
         $valid_char = "/^[a-zA-z]*$/";
    
       if (isset($_POST['firstname']) && !empty($_POST['firstname'])) {
        // Validate First name
        if(preg_match ($valid_char, $_POST['firstname'])){
            $visitor_fname = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
        }else{
            array_push($fail, "First Name should only contain letters.");
        }
    }else{
        array_push($fail, "Firstname field is empty");
    }
    if (isset($_POST['lastname']) && !empty($_POST['lastname'])) {
          // Validate Last name
        if(preg_match ($valid_char, $_POST['lastname'])){
            $visitor_lname .= " " . filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
        }else{
            array_push($fail,"Last Name should only contain letters");
        }
    }else{
        array_push($fail, "Lastname field is empty");
    }
   // Validate Email
    $pattern = $email_pattern;
    if (isset($_POST['email']) && !empty($_POST['email'])) {
        if (preg_match($pattern,$_POST['email'])){
            $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
            $visitor_email = filter_var($email, FILTER_VALIDATE_EMAIL);
        }else{
            array_push($fail,"Write valid email address");
        }

    }else{
        array_push($fail, "Email field is empty");
    }

    if (isset($_POST['message']) && !empty($_POST['message'])) {
        $clean = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
        $message = htmlspecialchars($clean);
    }else{
        array_push($fail, "Message field is empty");
    }
    
        /*
        It is an in-built function of PHP, which is used to insert the HTML line breaks before all newlines in the string. Although, we can also use PHP newline character \n or \r\n inside the source code to create the newline, but these line breaks will not be visible on the browser.
        */
    
        $headers = "From:". $visitor_email . "\r\n" .
        'Reply-To:'. $visitor_email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        
        if (count($fail)==0) {
            //echo count($fail);
            mail($recipient, $subject, $message, $headers);
            /* In printf, %s is a placeholder for data that will be inserted into the string. 
            The extra arguments to printf are the values to be inserted. They get associated with 
            the placeholders positionally: the first placeholder gets the first value, the second 
            the second value, and so on.  $visitor_name is the %s(this is the placeholder within the string).
            */
            $results['message'] = sprintf('Thank you for contacting us, %s. You will get a reply within 24 hours', $visitor_fname.$visitor_lname);
        } else {
            // Using this as a response message witha  custom code to grab with JS.
            header('HTTP/1.1 488 You Did NOT fill out the form correctly');
            die(json_encode(["message" => $fail]));
        }
    } else {
        $results['message'] = 'No submission';
    }
    
    echo json_encode($results);


?>