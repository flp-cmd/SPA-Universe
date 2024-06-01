import { Router } from "./router.js"

const router = new Router()
router.add("/home", "/pages/home.html")
router.add("/universe", "/pages/universo.html")
router.add("/exploration", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function setActiveLinks() {
  const links = document.querySelectorAll('nav a')
  const { pathname } = window.location

  links.forEach(link => {
    if (link.getAttribute('href') === pathname){
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

setActiveLinks()