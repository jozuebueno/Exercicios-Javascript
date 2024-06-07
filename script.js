document.getElementById('alterarTextoBtn').addEventListener('click', function() {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.textContent = 'Texto alterado via JavaScript';
  });

  
  function criarLista() {
    
  var lista = document.createElement("ul");

  for (var i = 1; i <= 3; i++) {
        var item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    document.body.appendChild(lista);
  }
  function changeColor() {
    const divElement = document.getElementById('myDiv');
    divElement.style.backgroundColor = 'black';
  }

  function exibirTexto() {
    var texto = document.getElementById("texto").value;
    document.getElementById("resultado").innerHTML = "Você digitou: " + texto;
  }

  function mudarCor() {
    document.querySelector('.minha-div').style.backgroundColor = "#f00";
}

function resetarCor() {
    document.querySelector('.minha-div').style.backgroundColor = "#ccc"; 

}

var campoDeTexto = document.getElementById("campo-de-texto");
var paragrafo = document.getElementById("paragrafo");
campoDeTexto.addEventListener("input", function() {

    paragrafo.textContent = campoDeTexto.value;
});

function alterarCor(item) {
  var listaItens = document.querySelectorAll('li');
  listaItens.forEach(function(li) {
      li.classList.remove('item-clicado');
  });
  item.classList.add('item-clicado');
}
