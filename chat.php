<?php

function isUserLogged() {
  if (!$_POST['user']) {
    return false;
  } else {
    return true;
  }
}

require("./views/chat.view.php");