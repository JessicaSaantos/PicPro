
const listaOpcoes = document.querySelector (".secaoDetalhesConta__opcoesTransacoes")

listaOpcoes.addEventListener ("click" , identificarOpcoes)

function identificarOpcoes (event) {

    const elem = event.target

    if (elem.tagName == 'LI') {

        const id = elem.id

        const secao = document.querySelector(`div [data-ident="${id}"]`)
       

        removeClasseMostrar()

        secao.classList.add("mostrar")

    }
}


function removeClasseMostrar () {
    const divs = document.querySelectorAll(".secaoTransacao__container div")

    for (let i = 0; i < divs.length ; i++) {
        divs[i].classList.remove("mostrar")
    }
    
} 