import VueRouter from 'vue-router'

let lazyLoad = (module) => { return resolve => require([ 'src/' + module + '/components/index.vue' ], resolve) }
let load = (module) => { return require('src/' + module + '/components/index.vue') }
let moduleConfig = (module) => {
  return { path: module, name: module, component: lazyLoad(module) }
}

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  }, {
    path: '/admin',
    name: 'admin',
    component: lazyLoad('admin'),
    meta: { requiresAuth: true }
  }, {
    path: '/',
    name: 'dash',
    component: load('dash'),
    children: [
      moduleConfig('home'),
      moduleConfig('personalI'),
      moduleConfig('personalII'),
      moduleConfig('workI'),
      moduleConfig('workII'),
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
  routes: routes,
  mode: 'history'
})

export { router }
