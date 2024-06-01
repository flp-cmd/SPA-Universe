import { Router } from "./router.js"

const router = new Router()
router.add("/home", "/spa/pages/home.html")
router.add("/universe", "spa/pages/universo.html")
router.add("/exploration", "/spa/pages/exploracao.html")
router.add(404, "/spa/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()