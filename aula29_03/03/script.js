function adicionartabela(){
    let adicionar = document.getElementById("adicionar").value
    let selecionado = document.getElementById("item")
    let option = selecionado.option[select.selectedIndex].text
    

    let table = document.createElement("table")
    let tbody= document.createElement("tbody")

    table.appendChild(tbody)
    let linha2 = createElement('td')

    linha2.appendChild(adicionar)
    tbody.appendChild(linha2)
}