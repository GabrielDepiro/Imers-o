/*
  Esta função é responsável por realizar uma pesquisa em uma lista de países e exibir os resultados em uma seção HTML.
  Ela itera sobre cada país, cria um elemento HTML para cada um e adiciona os resultados à seção.
*/
function pesquisar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    // String para armazenar os resultados da pesquisa
    let resultados = ""

    // Itera sobre os dados dos países
    for(let dado of paises){
        // Cria uma div para cada país com as informações relevantes
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" text-align: center>${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> • ${dado.continente}</p>
                <p class="descricao-meta"> • ${dado.capital}</p>    
                <p class="descricao-meta"> • ${dado.idiomaOficial}</p>
                <p class="descricao-meta"> • ${dado.moedaOficial}</p>   
                <p class="descricao-meta">${dado.descricao}.</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
    // Atualiza a seção HTML com os resultados da pesquisa
    section.innerHTML = resultados
}



