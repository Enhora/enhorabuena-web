import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import Sales from '../views/Sales'
import Expenses from '../views/Expenses'
import NotFound from '../views/404'
import Providers from '../views/Providers'
import SalesDetail from '../views/SalesDetail'
import Stock from '../views/Stock'
import StockDetail from '../views/StockDetail'
import ExpensesDetail from '../views/ExpensesDetail'

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
    path: '/ventas/detalle',
    component: SalesDetail
  },
  {
    path: '/gastos',
    component: Expenses
  },
  {
    path: '/gastos/detalle',
    component: ExpensesDetail
  },
  {
    path: '/proveedores',
    component: Providers
  },
  {
    path: '/stock',
    component: Stock
  },
  {
    path: '/stock/detalle',
    component: StockDetail
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
