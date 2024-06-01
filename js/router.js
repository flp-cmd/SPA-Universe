export class Router{
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    console.log(event)

    this.handle()
  } 

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#page').innerHTML = html
    })
  }

}