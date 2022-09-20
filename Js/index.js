import { Router } from './router.js'

const router = new Router()
router.add('/', '/Pages/home.html')
router.add('/about', '/Pages/about.html')
router.add('/gps', '/Pages/gps.html')
router.add('/services', '/Pages/services.html')
router.add('/contact', '/Pages/contact.html')
router.add(404, '/Pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
