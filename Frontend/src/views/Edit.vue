<template>
    <Header />
    <div class="container">
        <div class="home">
            <h1>Edit</h1>
            <Form @onSubmit = "onSubmit" buttonValue="Save" dataCreare="true" :error="error"/>
            <br>
            <router-link class ="router" to="/">Back to List</router-link>
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
import axios from 'axios';

export default {
    name: "Edit",
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
            let modificat = {};

            if(denumire !== "") {
                modificat["Denumire"] = denumire;
            }

            if(coordonataX !== "" && typeof coordonataX === "number") {
                modificat["CoordonataX"] = coordonataX;
            }

            if(coordonataY !== "" && typeof coordonataY === "number") {
                modificat["CoordonataY"] = coordonataY;
            }

            if(estevizibil !== "") {
                modificat["EsteVizibil"] = estevizibil;
            }

            if(Object.keys(modificat).length !== 0) {
                const resp = await this.patchData(modificat, this.$route.params.id);
                if(resp === 500) {
                    this.error += `*Punct deja existent `;
                } else {
                    this.$router.push("/");
                }
            }
            
            return;
        },

        // async patchData(modificat, id) {
        //     const response = await fetch(`http://localhost:3000/punct/${id}`, {
        //         method: "PATCH",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(modificat)
        //     })
        //     return response.json();
        // }

        async patchData(modificat, id) {
            try {
                const resp = await axios.patch(`http://localhost:3000/punct/${id}`, {
                    ...modificat
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