import Home from '../components/Home.vue';
import Contact from '../components/Contact.vue';
import Projects from '../components/Projects.vue';
import Formation from '../components/Formation.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contact},
    {path: '/proyectos', component: Projects},
    {path: '/formacion', component: Formation}
];