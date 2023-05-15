<template>
    <Header />
    <div class="container">
        <div class="home">
            <h1>Details</h1>
            <br>
            <Info :id="$route.params.id"/>
            <div class = "links">
                <router-link class="router" :to="'/Edit/'+ $route.params.id">Edit</router-link> | 
                <router-link class ="router" to="/">Back to List</router-link>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue";
import Info from "../components/Info.vue"

export default {
    name: 'Details',
    components: {
        Header,
        Footer,
        Info
    }
}

</script>

<style scoped>

h1 {
    width: 100%;
    font-weight: 500;
    border-bottom: 1px solid rgb(190, 184, 184);
    padding: 10px;
}
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.links {
    width: 100%;
    font-size: 1.3em;
    border-top: 1px solid rgb(190, 184, 184);
    padding: 10px;
}

.router {
    text-decoration: none;
    color: rgb(41, 41, 160);
}

</style>