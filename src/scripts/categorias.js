document.addEventListener("DOMContentLoaded", ()=> {
    console.log('JS carregado')

    const linksCategorias = document.querySelectorAll('#Categorias a')
    const artigos = document.querySelectorAll('#Artigos article')
    
    linksCategorias.forEach((link) => {
        link.addEventListener('click', (event)=> {
            event.preventDefault()
            
            const categoria = link.getAttribute('data-category')
            console.log('Categoria clicada:', categoria)
            
            artigos.forEach((artigo)=> {
                console.log(`Artigo: ${artigo.textContent}, Categoria: ${linksCategorias}`)
                artigo.classList.remove("mostrar")

                if (categoria === "todos"){
                    artigo.classList.add("mostrar")
                } else if (artigo.getAttribute("data-category") === categoria) {
                    artigo.classList.add("mostrar")
                }
            })
        })
    })
})