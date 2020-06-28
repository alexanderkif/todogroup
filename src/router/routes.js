
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'options', component: () => import('pages/Options.vue') },
      { path: 'add', component: () => import('pages/AddGroup.vue') },
      { path: 'create', component: () => import('pages/CreateGroup.vue') },
      { path: 'groupdetail', component: () => import('pages/GroupDetail.vue') }
    ]
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
