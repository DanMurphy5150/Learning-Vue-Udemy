import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import CatchAllPage from './components/nav/CatchAllPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList }, // could add alias: '/' but this doesnt change the URL like in the first route
    { path: '/users', component: UsersList },
    // Order matters with routes
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:catchall(.*)', component: CatchAllPage },
  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app');
