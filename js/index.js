let input = document.getElementById("input-tarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = input.value;
    //validar vazio, nulo ou indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        //colocar id na tarefa com contador
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarFeito(${contador})" class="itemIcone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarFeito(${contador})" class="itemNome">
            ${valorInput}
        </div>
        <div class="itemBotao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;
    //adiciona novo item no main
    main.innerHTML += novoItem;

    //zerar o valor do input
    input.value = "";
    input.focus();
    }
}
//adicionar tarefa com a tecla enter
input.addEventListener("keyup", function(event){
    //se teclar enter
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

//deletar item
function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove();
}

function marcarFeito(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");
    //console.log(classe);

    if(classe == "item"){
        item.classList.add("clicado");

        let icone = document.getElementById("icone_"+id);
        icone.classList.remove("mdi-circle-outline")
        icone.classList.add("mdi-checkbox-marked-circle");
        //mandar para o final da lista
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");

        let icone = document.getElementById("icone_"+id);
        icone.classList.remove("mdi-checkbox-marked-circle")
        icone.classList.add("mdi-circle-outline");
    }

}
