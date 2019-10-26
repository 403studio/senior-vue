export default [
  {
    path: '/examples',
    name: 'examples',
    component: () => import('@/views/layout/example.vue'),
    children: [
      {
        path: '1',
        name: 'example-1',
        component: () => import('@/views/examples/example1')
      },
      {
        path: '2',
        name: 'example-2',
        component: () => import('@/views/examples/example2')
      },
      {
        path: '3',
        name: 'example-3',
        component: () => import('@/views/examples/example3')
      }
    ]
  }
]
