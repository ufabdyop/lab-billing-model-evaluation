<?php
session_start();
if (isset($_SESSION['billing_model_sess_id'])) {
    $sess_id = $_SESSION['billing_model_sess_id'];


    $file = '/tmp/' . $sess_id;
    $json_string = file_get_contents($file);

    $mime = 'text/json';
    $filename = 'billing_model.json';
    $filesize = strlen($json_string);
    header('Content-Description: File Transfer');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Content-Type: application/octet-stream'  );
    header('Content-Length: ' . $filesize);

    ob_clean();
    echo $json_string;
}
?>
