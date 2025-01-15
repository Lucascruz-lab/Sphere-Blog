document.addEventListener("DOMContentLoaded", ()=> {
    console.log('JS carregado')

    const buttons = document.querySelectorAll('#Categorias button[data-category]')
    const artigos = document.querySelectorAll('#Artigos .artigos-post')

    console.log('Botões encontrados:', buttons.length)
    console.log('Artigos encontrados:', artigos.length)

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category
            console.log('Categoria selecionada:', category)

            artigos.forEach(artigo => {
                if (category === 'todos' || artigo.dataset.category === category) {
                    artigo.style.display = 'block'
                } else {
                    artigo.style.display = 'none'
                }
            })
        })
    })
})