import BasicLayout from '@/layouts/BasicLayout'
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export default [
  {
    path: '/',
    redirect: { name: 'home' },
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/product/index')
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/notice/index')
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import('@/views/analysis/index')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/index')
      },
      {
        path: 'newsdetail',
        name: 'newsdetail',
        component: () => import('@/views/news/newsDetail/index')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/contact/index')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index')
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
