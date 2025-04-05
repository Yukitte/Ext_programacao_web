// Contador de cliques
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

// Adicionar texto dinâmico e contar caracteres
const campoTexto = document.getElementById("campoTexto");
const caracteres = document.getElementById("caracteres");
const mensagemContainer = document.getElementById("mensagem-container");

campoTexto.addEventListener("input", () => {
    const textoSemEspacos = campoTexto.value.replace(/\s/g, "");
    caracteres.textContent = `Caracteres: ${textoSemEspacos.length}`;
});

campoTexto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const texto = campoTexto.value.trim();
        if (texto !== "") {
            const p = document.createElement("p");
            p.textContent = texto;
            mensagemContainer.appendChild(p);
            campoTexto.value = "";
            caracteres.textContent = "Caracteres: 0";
        }
    }
});

// Adicionar novo item: lista ordenada ou não ordenada
document.getElementById("adicionarLista").addEventListener("click", () => {
    const tipo = document.getElementById("tipoLista").value;
    const lista = document.createElement(tipo);
    const item = document.createElement("li");
    item.textContent = "Novo Item";
    lista.appendChild(item);
    document.getElementById("listas").appendChild(lista);
});

// Tabela dinâmica
const tabela = document.getElementById("tabelaItens").querySelector("tbody");
const selectMenu = document.getElementById("menuItens");

function atualizarMenu() {
    selectMenu.innerHTML = "";
    [...tabela.children].forEach((row, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = row.cells[0].textContent;
        selectMenu.appendChild(option);
    });
}

document.getElementById("adicionarItem").addEventListener("click", () => {
    const input = document.getElementById("itemInput");
    const texto = input.value.trim();
    if (texto !== "") {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = texto;
        row.appendChild(cell);
        tabela.appendChild(row);
        input.value = "";
        atualizarMenu();
    }
});

document.getElementById("marcar").addEventListener("click", () => {
    const index = selectMenu.value;
    if (tabela.rows[index]) {
        tabela.rows[index].classList.add("marcado");
    }
});

document.getElementById("desmarcar").addEventListener("click", () => {
    const index = selectMenu.value;
    if (tabela.rows[index]) {
        if (tabela.rows[index].classList.contains("marcado")) {
            tabela.rows[index].classList.remove("marcado");
        } else {
            alert("Este item já está desmarcado.");
        }
    }
});

document.getElementById("remover").addEventListener("click", () => {
    const index = selectMenu.value;
    if (tabela.rows[index]) {
        tabela.deleteRow(index);
        atualizarMenu();
    }
});

// Reset geral
document.getElementById("reset").addEventListener("click", () => {
    contador = 0;
    contadorSpan.textContent = "0";
    mensagemContainer.innerHTML = "";
    campoTexto.value = "";
    caracteres.textContent = "Caracteres: 0";
    document.getElementById("listas").innerHTML = "";
    tabela.innerHTML = "";
    atualizarMenu();
});
