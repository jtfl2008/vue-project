const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const Initial = () => import('@/views/Initial')
const Modern = () => import('@/views/Modern')
const About = () => import('@/views/About')
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'initial',
        name: 'Initial',
        component: Initial
      },
      {
        path: 'modern',
        name: 'Modern',
        component: Modern
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
export default routes
