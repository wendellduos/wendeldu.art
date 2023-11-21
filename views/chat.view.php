<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Wendel Duarte - Chat</title>
  <link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
  <div id="guest-form" style="display: <?= isUserLogged() ? 'none' : 'flex'; ?>;">
    <div id="guest-form-wrapper">
      <div id="guest-form-icon-wrapper">
        <img src="../assets/img/chat-icon.png" alt="Imagem de bolha de mensagem">
        <h1>Chat</h1>
      </div>
      <div id="chat-description">
        <p>Começe a conversar inserindo seu nome abaixo.</p>
        <p>
          Ou se preferir,
          <a href="mailto:contato@wendeldu.art">mande um email.</a>          
        </p>
        <p>Responderei o mais breve possível.</p>
      </div>
      <form action="" method="post">
        <input type="text" name="user" id="user" placeholder="Insira seu nome">
        <input type="submit" id="submit" value="&#10148;">
      </form>
    </div>
  </div>
  <header id="chat-header">
    <div id="chat-header-details">
      <img src="../assets/img/profile.jpeg" alt="Imagem de perfil">
      <h2>Wendel</h2>
    </div>
    <div id="chat-header-burger">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="burger-menu-icon"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        width="23"
        height="23"
      >
        <g>
          <circle cx="256" cy="53.333" r="53.333" />
          <circle cx="256" cy="256" r="53.333" />
          <circle cx="256" cy="458.667" r="53.333" />
        </g>
      </svg>
    </div>
  </header>
  <footer id="chat-footer">
    <input type="text" placeholder="Escreva algo legal">
    <button type="button" id="send-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="send-msg-icon"
          viewBox="0 0 24 24"
          width="25"
          height="25"
        >
          <path
            d="M5.521,19.9h5.322l3.519,3.515a2.035,2.035,0,0,0,1.443.6,2.1,2.1,0,0,0,.523-.067,2.026,2.026,0,0,0,1.454-1.414L23.989,1.425Z"
          />
          <path d="M4.087,18.5,22.572.012,1.478,6.233a2.048,2.048,0,0,0-.886,3.42l3.495,3.492Z" />
        </svg>
      </button>
    </button>
  </footer>
</body>
</html>