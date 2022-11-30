import * as VueRouter from 'vue-router';

// Define all the routes of our application
const routes = [
    {
        path: '/',
        // Rather than having to have separate import statements at the top of this page for each component
        // Here's a simple way we can directly make our components available
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/search',
        component: () => import('@/components/pages/SearchResults.vue'),
    },
    {
        name: 'bookMedia',
        path: '/media/books/:id',
        component: () => import('@/components/pages/resultPages/BookResultDetail.vue'),
        props: true,
    },
    {
        name: 'articleMedia',
        path: '/media/articles/:id',
        component: () => import('@/components/pages/resultPages/ArticleResultDetail.vue'),
        props: true,
    },
    {
        name: 'movieMedia',
        path: '/media/movies/:id',
        component: () => import('@/components/pages/resultPages/MovieResultDetail.vue'),
        props: true,
    },
    {
        name: 'podcastMedia',
        path: '/media/podcasts/:id',
        component: () => import('@/components/pages/resultPages/PodcastResultDetail.vue'),
        props: true,
    },

];

// Initialize our router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});



export default router;