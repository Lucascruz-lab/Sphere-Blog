const form = document.getElementById('newsletter-form')
const message = document.getElementById('newsletter-message')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const email = document.getElementById('email').value

    if(email) {
        message.textContent = 'Obrigado por se inscrever!'
        message.style.color = 'green'
        form.reset()
    } else {
        message.textContent = ' Por favor, insira um e-mail válido.'
        message.style.color = 'red'
    }
})