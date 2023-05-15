import {createRouter, createWebHistory } from 'vue-router';

import Home from "../views/Home.vue"
import Edit from "../views/Edit.vue"
import Details from "../views/Details.vue"
import Delete from "../views/Delete.vue"
import CreateNew from "../views/CreateNew.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/CreateNew",
        name: "CreateNew",
        component: CreateNew
    },
    {
        path: "/Edit/:id",
        name: "Edit",
        component: Edit
    },
    {
        path: "/Details/:id",
        name: "Details",
        component: Details
    },
    {
        path: "/Delete/:id",
        name: "Delete",
        component: Delete
    },
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router