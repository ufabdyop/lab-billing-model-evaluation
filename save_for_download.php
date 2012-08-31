<?php
session_start();
if (isset($_SESSION['billing_model_sess_id'])) {
    $sess_id = $_SESSION['billing_model_sess_id'];
} else {
    $_SESSION['billing_model_sess_id'] = 'billing_model_json' . rand(0, 9) . rand(0, 9)  . rand(0, 9)  . rand(0, 9) ;
    $sess_id = $_SESSION['billing_model_sess_id'];
}

    $json_string = $_POST['input'];
    $fh = fopen('/tmp/' . $sess_id, 'w');
    fwrite($fh, $json_string);
    fclose($fh);
    
?>
