import { createRouter, createWebHistory } from 'vue-router/auto'
import Inventory from '../views/aset/Inventory.vue'
import InventoryHistory from '../views/aset/InventoryHistory.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Beranda' },
  },
  {
    path: '/aset',
    name: 'aset',
    children: [
      {
        path: '',
        name: 'index',
        component: Inventory,
        meta: { requiresAuth: true, title: 'Beranda_Inventory' },
      },
      {
        path: 'history',
        name: 'InventoryHistory',
        component: InventoryHistory,
        meta: { title: 'Inventory_History' },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
