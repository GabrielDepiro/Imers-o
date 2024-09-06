/*
  Esta função é responsável por realizar uma pesquisa em uma lista de países e exibir os resultados em uma seção HTML.
  Ela itera sobre cada país, cria um elemento HTML para cada um e adiciona os resultados à seção.
*/
function pesquisar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa.trim()){
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // String para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados dos países
    for(let dado of paises){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
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
    }

    if (!resultados){
            resultados = "<p>Não foi encontrado nenhum resultado com sua pesquisa</p>"
    }

    // Atualiza a seção HTML com os resultados da pesquisa
    section.innerHTML = resultados
}



