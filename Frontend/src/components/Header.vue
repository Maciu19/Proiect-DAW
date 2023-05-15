<template>
    <div class="header">
        <h1> Application </h1>
        <router-link class="router" to="/">Home</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:10%;
        background-color: rgb(51, 47, 47);
        color: rgb(182, 177, 177);
    }

    .router {
        text-decoration: none;
        color: rgb(182, 177, 177);
        font-size: 1.3em;
    }

    .router:hover {
        color: rgb(255, 54, 4);
        font-size: 1.5em;
        transition: width 2s, height 4s;
    }
</style>