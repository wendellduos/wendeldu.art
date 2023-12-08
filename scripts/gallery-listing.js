let images = [
  "beach-flower.webp",
  "blue-sky-clouds.webp",
  "caieiras-flower.webp",
  "elaine-bridge.webp",
  "caro-scream.webp",
  "mirante-expo.webp",
  "floripa-road.webp",
  "fred-iana.webp",
  "sunset-rose.webp",
  "dfran-expo.webp",
  "lost-in-woods.webp",
  "mirante-road.webp",
  "missy-portrait.webp",
  "night-sky.webp",
  "sunrise-prainha.webp",
  "windowed-sunset.webp",
  "quiriri-bridge.webp",
  "plant.webp",
  "quiriri-river-sky.webp",
  "sand-shell.webp",
  "sunrise-tent.webp",
  "fruits-picnic.webp",
  "villa-floripa.webp",
];

let alts = [
  "de uma flor",
  "do céu azul, prestes a anoitecer",
  "de uma flor rosa",
  "de uma moça de vestido em uma ponte, com árvores ao fundo",
  "de uma gata preta, no meio de um bocejo",
  "de luzes, em tons roxos formando linhas onduladas",
  "de uma mão segurando um pastel em um cenário montanhoso",
  "de uma rodovia movimentada na cidade de Florianópolis",
  "de dois gatos deitados ao pescoço um do outro",
  "da silhueta de uma rosa, em frente ao pôr do sol",
  "das luzes dos carros passando em uma rua escura",
  "de uma moça à frente de um caminho escuro na floresta",
  "de uma rua ondulada e céu após chover",
  "de uma gata sentada em um tronco de árvore",
  "do céu estrelado à noite, em preto e branco",
  "do nascer do sol, tirada em cima de uma grande rocha",
  "do pôr do sol, em frente à silhueta de uma janela",
  "de uma ponte centralizada na imagem, com natureza ao redor",
  "do closeup de folhagem verde",
  "do céu e nuvens acima de um rio",
  "de uma pequena concha na areia da praia",
  "de uma tenda e uma pessoa pouco visível na imagem",
  "de frutas posicionadas em uma pedra, acima de um rio",
  "de um ambiente interno simétrico e bem iluminado",
];

const galleryWrapper = document.getElementById("gallery-wrp");

// insert columns in wrapper
if (window.screen.width > 600) {
  galleryWrapper.innerHTML = `<div class="column s"></div><div class="column s"></div><div class="column s"></div>`;
} else if (window.screen.width > 350 && window.screen.width <= 600) {
  galleryWrapper.innerHTML = `<div class="column m"></div><div class="column m"></div>`;
} else if (window.screen.width <= 350) {
  galleryWrapper.innerHTML = `<div class="column l"></div>`;
}

// get created columns
const columns = document.querySelectorAll(".column");

// max number of images per column
let imagesPerColumn = Object.keys(images).length / columns.length;

for (i = 0; i <= images.length - 1; i++) {
  if (i < imagesPerColumn) {
    columns[0].innerHTML += `<img src="./img/${images[i]}" alt="Fotografia ${alts[i]}" />`;
  } else if (i >= imagesPerColumn && i < imagesPerColumn * 2) {
    columns[1].innerHTML += `<img src="./img/${images[i]}" alt="Fotografia ${alts[i]}" />`;
  } else {
    columns[2].innerHTML += `<img src="./img/${images[i]}" alt="Fotografia ${alts[i]}" />`;
  }
}
