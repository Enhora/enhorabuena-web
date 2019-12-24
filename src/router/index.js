import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import Sales from '../views/Sales'
import Expenses from '../views/Expenses'
import NotFound from '../views/404'
import Providers from '../views/Providers'
import DetalleVentas from '../views/SalesDetail'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/ventas',
    component: Sales
  },
  {
    path: '/gastos',
    component: Expenses
  },
  {
    path: '/proveedores',
    component: Providers
  },
  {
    path: '/detalle-ventas',
    component: DetalleVentas
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
