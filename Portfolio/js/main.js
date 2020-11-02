function enviarWhatsapp() {
  const link =
    "https://api.whatsapp.com/send?phone=5515997256577&text=Saudações! Gostei de seu trabalho, poderiamos conversar um pouco?";
  window.open(link, "_blank");
}

function enviarEmail() {
  const link =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=0&to=cmpvrau@gmail.com";
  window.open(link, "_blank");
}

function enviarLike() {
  alert("Que bom que você gostou! Não deixe de conferir meus contatos :)");
}

function trocaFoto(obj) {
  obj.src = "img/31.jpeg";
}

function voltaFoto(obj) {
  obj.src = "img/3.jpg";
}
