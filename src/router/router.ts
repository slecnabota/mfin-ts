import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext } from 'vue-router';
import Auth from '../libs/nast-auth/index';
import PaymentIndex from '@/views/payment/Index.vue';
import PlanningIndex from '@/views/planning/Index.vue';
import AnalyticsIndex from '@/views/analytics/Index.vue';
import Cash from '@/views/analytics/Cash.vue';
import CalendarIndex from '@/views/calendar/Index.vue';
import SettingsIndex from '@/views/settings/Index.vue';
import Accounts from '@/views/settings/Accounts.vue';
import AddAccounts from '@/views/settings/AddAccounts.vue';
import EditAccounts from '@/views/settings/EditAccounts.vue';
import LayoutMain from '@/layout/main/Index.vue';
import AuthMainPage from '@/layout/auth/Index.vue';
import LogInPage from '@/views/auth/Index.vue';
import ResetPage from '@/views/auth/reset/Index.vue';
import SendMail from '@/views/auth/reset/SendMail.vue';
import ResetPassword from '@/views/auth/reset/ResetPassword.vue';
import RegisterPage from '@/views/auth/register/Index.vue';
import Offer from '@/views/auth/register/Offer.vue';
import store from '../store/index'
const auth = new Auth();

const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/payments',
    component: LayoutMain,
    children: [
      { path: 'calendar', name: 'calendar', component: CalendarIndex, meta: { requiresAuth: true } },
      { path: 'payments', name: 'payments', component: PaymentIndex, meta: { requiresAuth: true } },
      { path: 'planning', name: 'planning', component: PlanningIndex, meta: { requiresAuth: true } },
      {
        path: 'analytics',
        children: [
          { path: '', name: 'analytics', component: AnalyticsIndex, meta: { requiresAuth: true } },
          { path: 'cash', name: 'cash', component: Cash, meta: { requiresAuth: true } },
        ],
      },
      {
        path: 'settings',
        children: [
          { path: '', name: 'settings', component: SettingsIndex, meta: { requiresAuth: true } },
          {
            path: 'accounts',
            children: [
              { path: '', name: 'accounts', component: Accounts, meta: { requiresAuth: true } },
              { path: 'addPages', name: 'addPages', component: AddAccounts, meta: { requiresAuth: true } },
              {
                path: 'editPages', name: 'editPages', component: EditAccounts, props: true, meta: { requiresAuth: true },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirect: '/loginpage',
    component: AuthMainPage,
    children: [
      {
        path: 'loginpage', children: [
          { path: '', name: 'loginpage', component: LogInPage, meta: { requiresAuth: false } },
          {
            path: 'reset', children: [
              { path: '', name: 'reset', component: ResetPage, meta: { requiresAuth: false } },
              { path: 'mail', name: 'mail', component: SendMail, meta: { requiresAuth: false } },
            ],
          },
          { path: 'resetpass', name: 'resetpass', component: ResetPassword, meta: { requiresAuth: false } },
        ],
      },
      {
        path: 'registerpage', children: [
          { path: '', name: 'registerpage', component: RegisterPage, meta: { requiresAuth: false } },
          { path: 'offer', name: 'offer', component: Offer, meta: { requiresAuth: false } },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      auth.needAuth(true);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
