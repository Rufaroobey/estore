import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Product from '@/components/Product.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/Product',
      name: 'Product',
      component: Product
    },

    {
      path: '/About',
      name: 'About',
      component: About
    },

    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },



  ]
})

export default router
