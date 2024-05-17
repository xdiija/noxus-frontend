
const routes = [
    {
        path: '/',
        component: () => import('layouts/LoginLayout.vue'),
        children: [
            { path: '/', name: 'login', component: () => import('pages/Login.vue') },
            { path: '/esqueci-minha-senha', name: 'esqueciSenha', component: () => import('pages/EsqueciSenha.vue') }
        ]
    },
    {
        path: '/home',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '/home', name: 'home', component: () => import('pages/IndexPage.vue') }
        ]
    },
    {
        path: '/income',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '/income', name: 'income', component: () => import('src/pages/IncomePage.vue') },
            { path: '/income-form/:id?', name: 'incomeForm', component: () => import('src/pages/IncomeForm.vue') }
        ]
    },

    // Always leave this as last one, but you can also remove it.
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes
