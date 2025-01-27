const toggleButton = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')

toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true'
    toggleButton.setAttribute('aria-expanded', !isExpanded)
    menu.classList.toggle('active')
})