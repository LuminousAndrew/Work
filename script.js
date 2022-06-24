document.body.style.backgroundColor = "red";

function createNft(src, name) {
  var nft = document.createElement("img");
  nft.src = src;
  document.write(name);
  document.body.appendChild(nft);
}

createNft('nft1.jpg', 'Bored Ape - Metal Ape'); 