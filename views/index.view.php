<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wendel Duarte - Home</title>
  <link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
  <section id="home-banner">
    <div id="home-banner-wrapper">
      <div id="home-banner-profile-pic">
        <div id="home-banner-logo"></div>
      </div>
      <h1 class="title center-text">Wendel Duarte</h1>
      <h2 class="center-text dimmed normal-wght" id="home-banner-subtext">Que meus feitos possam trazer um pouco de paz e alegria à este mundo conturbado.</h2>
    </div>
  </section>
  <nav>
    <ul>      
      <li>
        <a class="<?= urlIs("/") ? 'selected' : 'unselected' ?>" href="../home.php">Home</a>
      </li>
      <li>
        <a class="<?= urlIs("/sobre") ? 'selected' : 'unselected' ?>" href="../about.php">Sobre</a>
      </li>
      <li>
        <a class="<?= urlIs("/projetos") ? 'selected' : 'unselected' ?>" href="../projects.php">Projetos</a>
      </li>
      <li>
        <a class="<?= urlIs("/contato") ? 'selected' : 'unselected' ?>" href="../contact.php">Contato</a>
      </li>
    </ul>
  </nav>
  <!-- <a href="./chat.php">Chat</a> -->
</body>
</html>