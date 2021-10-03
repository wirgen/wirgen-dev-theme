const screenHeight = window.innerHeight
let totopShowed = false

const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.getElementById('mobileMenu')
const tocLinks = document.querySelectorAll('.toc a')
const totopLink = document.getElementById('totop')

if (totopLink) {
  window.addEventListener('scroll', () => {
    if (totopShowed && window.scrollY < screenHeight) {
      totopLink.classList.add('hidden')
      totopShowed = false
    }
    if (!totopShowed && window.scrollY > screenHeight) {
      totopLink.classList.remove('hidden')
      totopShowed = true
    }
  })

  totopLink.addEventListener('click', event => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })

    return false
  })
}

openMenu.addEventListener('click', () => {
  document.body.style.overflow = 'hidden'
  mobileMenu.classList.remove('translate-x-full')
  openMenu.classList.add('hidden')
  closeMenu.classList.remove('hidden')
})

closeMenu.addEventListener('click', () => {
  document.body.style.overflow = 'auto'
  mobileMenu.classList.add('translate-x-full')
  openMenu.classList.remove('hidden')
  closeMenu.classList.add('hidden')
})

tocLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    const hash = event.target.hash.substring(1)
    document.getElementById(hash).scrollIntoView({ behavior: 'smooth' })

    return false
  })
})
