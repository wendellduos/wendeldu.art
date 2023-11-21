<?php

function urlIs($value) {
  $uri = $_SERVER["REQUEST_URI"];

  return $uri === $value;
}

require('./views/index.view.php');