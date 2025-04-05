let contador = 0;
const contadorSpan = document.getElementById("contador");

document.getElementById("incrementar").addEventListener("click", () => {
    contador++;
    contadorSpan.textContent = contador;
});

document.getElementById("decrementar").addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        contadorSpan.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

const campoTexto = document.getElementById("campoTexto");
const mensagemContainer = document.getElementById("mensagem-container");
const caracteresSpan = document.getElementById("caracteres");

campoTexto.addEventListener("input", () => {
    caracteresSpan.textContent = "Caracteres: " + campoTexto.value.replace(/\s/g, "").length;
});

campoTexto.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && campoTexto.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = campoTexto.value;
        mensagemContainer.appendChild(p);
        campoTexto.value = "";
        caracteresSpan.textContent = "Caracteres: 0";
    }
});

document.getElementById("adicionarLista").addEventListener("click", () => {
    const tipo = document.getElementById("tipoLista").value;
    const lista = document.createElement(tipo);
    for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }
    document.getElementById("listas").appendChild(lista);
});

document.getElementById("reset").addEventListener("click", () => {
    contador = 0;
    contadorSpan.textContent = contador;
    mensagemContainer.innerHTML = "";
    document.getElementById("listas").innerHTML = "";
    campoTexto.value = "";
    caracteresSpan.textContent = "Caracteres: 0";
});
