import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import ListPage from '@/components/pages/ListPage.vue';
import RecipesPage from '@/components/pages/RecipesPage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/recipe/:id', component: RecipePage, props: true },
        { path: '/recipes', component: RecipesPage },
        { path: '/ingredientslist', component: ListPage,props: true },
        { path: '/account', component: AccountPage },
    ]
});
createApp(App).use(router).mount('#app')
