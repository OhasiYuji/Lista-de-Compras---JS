const item = document.getElementById("input-item");
const botaoSalvar = document.getElementById("salvar-item");
const listaCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados")
let contador = 0;

botaoSalvar.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    
    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("linha-item");

    const containerNomeItem = document.createElement("div");
    containerNomeItem.classList.add("container-nome-item")

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input")
    checkboxInput.id = "checkbox-" + contador++

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input")
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado")
        
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked")
            nomeItem.style.textDecoration = "line-through"
            listaComprados.appendChild(itemLista)
        } else {
            checkboxCustomizado.classList.remove("checked")
            nomeItem.style.textDecoration = "none"
            listaCompras.appendChild(itemLista)
        }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeItem.appendChild(containerCheckbox);
    
    const nomeItem = document.createElement("p");
    nomeItem.innerText = item.value;
    containerNomeItem.appendChild(nomeItem);
    

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("item-lista-button")
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);
    
    containerItemLista.appendChild(containerNomeItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`
    itemData.classList.add("texto-data");

    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);
    listaCompras.appendChild(itemLista);
}
