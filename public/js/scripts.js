const toggle = document.getElementById('menu-toggle')
const menu = document.getElementById('mobile-menu')

let open = false

toggle.addEventListener('click', () => {
  if (open) {
    menu.classList.remove('max-h-custom')
    menu.classList.add('max-h-0')
  } else {
    menu.classList.remove('max-h-0')
    menu.classList.add('max-h-custom')
  }
  open = !open
})
