import VueRouter from 'vue-router'

let lazyLoad = (module) => { return resolve => require([ 'src/' + module + '/components/index.vue' ], resolve) }
let load = (module) => { return require('src/' + module + '/components/index.vue') }
let moduleConfig = (module) => {
  return { path: module, name: module, component: lazyLoad(module) }
}

const routes = [
  {
    path: '/',
    component: load('dash'),
    children: [
      { path: '', name: 'home', component: lazyLoad('home') }
    ]
  }, {
    path: '/',
    name: 'dash',
    component: load('dash'),
    children: [
      moduleConfig('personalI'),
      moduleConfig('personalII'),
      moduleConfig('personalIII'),
      moduleConfig('workI'),
      moduleConfig('workII'),
      moduleConfig('workIII'),
      moduleConfig('bio'),
      moduleConfig('contact')
    ]
  }, {
    // not found handler
    path: '*',
    name: '404',
    component: lazyLoad('404')
  }
]

const router = new VueRouter({
  base: '/',
  routes: routes,
  mode: 'history'
})

export { router }
