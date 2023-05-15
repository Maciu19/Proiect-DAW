<template>
    <Header />
    <div class="container">
        <div class="home">
            <h1>Create</h1>
            <Form @onSubmit = "onSubmit" buttonValue="Create" :error="error" />
            <br>
            <router-link class ="router" to="/">Back to List</router-link>
            <Footer />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";

export default {
    name: "CreateNew",
    data() {
        return {
            error: '  '
        }
    },
    components: {
        Header,
        Footer,
        Form,
    },
    methods: {
        async onSubmit(denumire, coordonataX, coordonataY, estevizibil) {
            let punctNou = {};

            this.error = '  ';

            if(denumire !== "") {
                punctNou["Denumire"] = denumire;
            } else {
                this.error += "*Campul Denumire este obligatoriu";
                return;
            }

            if(coordonataX !== "" && typeof coordonataX === "number") {
                punctNou["CoordonataX"] = coordonataX;
            } else {
                this.error += "*Campul Coordonata X este obligatoriu";
                return;
            }

            if(coordonataY !== "" && typeof coordonataY === "number") {
                punctNou["CoordonataY"] = coordonataY;
            } else {
                this.error += "*Campul Coordonata Y este obligatoriu";
                return;
            }

            if(estevizibil === "") {
                punctNou["EsteVizibil"] = false;
            } else {
                punctNou["EsteVizibil"] = estevizibil;
            }
        
            const res = await this.postData(punctNou);
            if(res === 500) {
                this.error += `*Punct deja existent `;
            } else {
                this.$router.push("/");   
            }
        },

        // async postData(punctNou) {
        //     const response = await fetch("http://localhost:3000/punct", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(punctNou)
        //     })
        //     return response.json();
        // }

        async postData(punctNou) {
            try{
                const resp = await axios.post("http://localhost:3000/punct", {
                    ...punctNou
                })
                return resp.data;
            } catch (e) {
                return e.response.status;
            }
        }
    }
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