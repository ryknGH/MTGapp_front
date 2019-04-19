import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NotFound from '../components/NotFound'
import Register from '../components/Register'
import Waiting from '../components/Waiting'
import Meeting from '../components/Meeting'
import Finish from '../components/Finish'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/waiting',
            name: 'Waiting',
            component: Waiting
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/finish',
            name: 'Finish',
            component: Finish
        },
        {
            path: '/meeting',
            name: 'Meeting',
            component: Meeting
        },
        {
            path: '*',
            name: 'Page Not Found',
            component: NotFound,
        },
    ]
})
