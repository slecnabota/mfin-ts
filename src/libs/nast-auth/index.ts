import store from '@/store/index';
import config from './config';
import router from '@/router/router';
interface AuthData {
    user: string;
    token: string;
}

class Auth {

    init(): void {
        const lsAuth = JSON.parse(localStorage.getItem('auth') || '{}');
        const token = lsAuth.token;
        const user = lsAuth.user;

        if (token && user) {
            store.commit('login', { user, token });
        }

        if (localStorage.getItem('auth')) {
            const lsAuth = JSON.parse(localStorage.getItem('auth') || '{}');
            const token = lsAuth.token;
            const user = lsAuth.user;
            store.commit('login', { user, token });
            this.apiLogin(); // Восстанавливаем авторизацию с сервера
        }
    }

    login(user: any, token: string, redirect = true): void {
        store.commit('login', { user, token });
        this.apiLogin();

        if (redirect) {
            this.needAuth(false);
        }
    }

    loggedIn(): boolean {
        return Boolean(store.getters['token']);
    }

    logout(redirect = true): void {
        store.commit('logout');

        if (redirect) {
            this.needAuth();
        }
    }

    user(user?: string): string {
        if (user) {
            store.commit('setUser', user);
        }

        return store.getters.user;
    }

    needAuth(needAuth: boolean = true): void {
        const routerName = config(needAuth ? 'loginRoute' : 'authRoute');

        if (typeof routerName === 'string') {
            const routeLocation = { name: routerName };
      
            if ((needAuth && !this.loggedIn()) || (!needAuth && this.loggedIn())) {
              // Ensure that the route name corresponds to a defined route
              if (router.hasRoute(routeLocation.name)) {
                router.push(routeLocation);
              } else {
                console.error(`Route "${routeLocation.name}" is not defined.`);
              }
            }
          }
    }


    apiLogin(): void {
        const apiAuthFunction = config('apiAuth');
        if (typeof apiAuthFunction === 'function') {
            apiAuthFunction(store.getters.token);
        }
    }
}

export default Auth;
