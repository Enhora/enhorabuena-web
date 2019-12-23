import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import Sales from '../views/Sales'
import Expenses from '../views/Expenses'

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
