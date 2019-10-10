import Vue from 'vue';
import Router from 'vue-router';

// AUTHORISATION PAGES
import Login from './views/auth/Login.vue';
import Registration from './views/auth/Registration.vue';

// APPLICATION PAGES
import Home from './views/Home.vue';

Vue.use(Router);

export const router =  new Router ({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: 'Welcome to the project'
            }
        },
        {
            path: '/register',
            name: 'Registration',
            component: Registration,
            meta: {
                title: 'Register an account'
            }
        },
        // REDIRECT TO HOME
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Welcome to the home page!'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // REDIRECT TO LOGIN PG
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})