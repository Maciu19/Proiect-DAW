<template>
    <Header />
    <div class="container">
        <div class="home">
            <h1>Index</h1>
            <router-link class ="router" to="/CreateNew">Create New</router-link>
            <br>
            <Table :puncte="puncte"/>
            <br>
            <div class="points">
                <Chart />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Table from "../components/Table.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Chart from "../components/Chart.vue";
import axios from "axios";


export default {
    name: "Home",
    components: {
    Header,
    Table,
    Footer,
    Chart
    },
    data() {
        return {
            puncte: [],
        }
    },

    async created() {
        this.puncte = await this.getPuncte();
    },

    methods: {
        async getPuncte() {
            try {
                const resp = await axios.get('http://localhost:3000/punct');
                return resp.data;
            } catch(e) {
                console.log(e);
            }
        }
    },

    
}
</script>

<style scoped>

h1 {
    font-weight: 500;
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
    align-items: flex-start;
}

.router {
    font-size: 1.4em;
    text-decoration: none;
    color: rgb(41, 41, 160);
}

</style>