const iconTrigger = document.querySelector('#iconTrigger')
const icon = document.querySelector('#icon')
const menu = document.querySelector('.menu')

iconTrigger.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {

        // icon
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')

        // menu
        menu.classList.add('show')
        menu.classList.remove('hide')

    } else {
        // icon
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-times')

        // menu
        menu.classList.remove('show')
        menu.classList.add('hide')

        

    }
})