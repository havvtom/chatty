import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "@/components/Chat.vue";

import Message from "@/components/NewMessage.vue";
Vue.component('message', Message);

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next)=>{
        if(to.params.name){
          next(); 
        }else{
          next({name: "home"});
        }
       
      }
    }
  ]
});
