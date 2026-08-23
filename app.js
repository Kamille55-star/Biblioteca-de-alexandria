function pesquisar () {
    
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa = document.getElementById ("campo-pesquisa").value
  
  
  if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum livro encontrado</p>"
    return
  }
  

campoPesquisa = campoPesquisa.toLowerCase()
  
  
  let resultados = "";
  let titulo = ""
  
  for (let dado of dados) { 
    titulo= dado.titulo.toLowerCase()
    let autor = dado.autor.toLowerCase()
    let descricao = dado.descricao.toLowerCase()
    if (titulo.includes(campoPesquisa)|| autor.includes(campoPesquisa)|| descricao.includes(campoPesquisa)){
      
      resultados += `
    <div class="item-resultado">
    <img src=${dado.imagem} alt="">
              <h2> 
                <a href="${dado.combinacao}" target="_blank">${dado.titulo}</a>
              </h2>
          <p class="autor">Autor: ${dado.autor}</p>
          <p class = "descricao">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
    ` 
  }
    
    }

    if (!resultados) {
      resultados = "<p> O livro escolhido ainda não foi adicionado.</p>"
  
    }
  
    
    
    section.innerHTML = resultados
  }
  
  