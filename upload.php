<?php
session_start();
if (isset($_SESSION['billing_model_sess_id'])) {
    $sess_id = $_SESSION['billing_model_sess_id'];
} else {
    $_SESSION['billing_model_sess_id'] = 'billing_model_json' . rand(0, 9) . rand(0, 9)  . rand(0, 9)  . rand(0, 9) ;
    $sess_id = $_SESSION['billing_model_sess_id'];
}
var_dump($_FILES);
if ($_FILES["file"]["error"] > 0)
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
    `cp {$_FILES["file"]["tmp_name"]} /tmp/upload_$sess_id`;
    header('Location: index.php?restore=' . $sess_id);
  }
?>
