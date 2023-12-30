import {createRouter, createWebHistory} from "vue-router"
import DashBoad from "../pages/DashBoad.vue"
import More from "../pages/More.vue"
import Services from "../pages/Services.vue"
import ResidentialServices from "../pages/ResidentialService.vue";
import PetSitingService from "../pages/PetSitingService.vue";
import PageNotFound from "../pages/PageNotFound.vue"

const routes=[
    {
        path:"/",
        name:"Dashboard",
        component:DashBoad
    },
    {
        path:"/more",
        name:"More",
        component:More
    },
    {
        path:"/services",
        name:"Services",
        component:Services,
       
         
    },
    {
        path:"/resdential",
        name:"ResdentialServices",
        component:ResidentialServices,
    },
    {
        path:"/petsiting",
        name:"PetSitingService",
        component:PetSitingService,
    },
    {
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component:PageNotFound
    }
]


const router=createRouter({
    history:createWebHistory(),
    routes
})


export default router;