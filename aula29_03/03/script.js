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
            if (texto === "") {
                alert("Por favor, digite um item antes de adicionar.");
                return;
            }
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = texto;
            row.appendChild(cell);
            tabela.appendChild(row);
            input.value = "";
            atualizarMenu();
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

        document.getElementById("reset").addEventListener("click", () => {
            tabela.innerHTML = "";
            atualizarMenu();
            document.getElementById("itemInput").value = "";
        });
