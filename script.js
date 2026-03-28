// ELEMENTOS
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
const contador = document.getElementById("contador");

const inputTexto = document.getElementById("inputTexto");
const charCount = document.getElementById("charCount");
const mensagens = document.getElementById("mensagens");

const tipoLista = document.getElementById("tipoLista");
const addLista = document.getElementById("addLista");
const listas = document.getElementById("listas");

const reset = document.getElementById("reset");

// CONTADOR
let valor = 0;

incrementar.addEventListener("click", () => {
  valor++;
  contador.textContent = valor;
});

decrementar.addEventListener("click", () => {
  if (valor > 0) {
    valor--;
    contador.textContent = valor;
  } else {
    alert("O contador já está em zero!");
  }
});

// CONTADOR DE CARACTERES (SEM ESPAÇO)
inputTexto.addEventListener("input", () => {
  let texto = inputTexto.value.replace(/\s/g, "");
  charCount.textContent = texto.length + " caracteres";
});

// ENTER PARA ADICIONAR TEXTO
inputTexto.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let texto = inputTexto.value.trim();

    if (texto !== "") {
      let p = document.createElement("p");
      p.textContent = texto;
      mensagens.appendChild(p);
    }

    inputTexto.value = "";
    charCount.textContent = "0 caracteres";
  }
});

// ADICIONAR LISTA
let numeroLista = 1;

addLista.addEventListener("click", () => {
  let lista = document.createElement(tipoLista.value);

  for (let i = 1; i <= 3; i++) {
    let item = document.createElement("li");
    item.textContent = `Item ${i} da lista ${numeroLista}`;
    lista.appendChild(item);
  }

  listas.appendChild(lista);
  numeroLista++;
});

// RESET
reset.addEventListener("click", () => {
  valor = 0;
  contador.textContent = 0;

  inputTexto.value = "";
  charCount.textContent = "0 caracteres";

  mensagens.innerHTML = "";
  listas.innerHTML = "";

  numeroLista = 1;
});