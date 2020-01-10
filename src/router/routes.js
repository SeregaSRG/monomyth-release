
const routes = [
  {
    path: '/',
    component: () => import('layouts/Splash.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/info',
    component: () => import('layouts/Info.vue')
  },
  {
    path: '/texts',
    component: () => import('../layouts/texts.vue')
  },
  {
    path: '/transitions',
    component: () => import('../layouts/Transitions.vue')
  },
  {
    path: '/cycles',
    component: () => import('../layouts/Cycles.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
