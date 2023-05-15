<template>
    <table>
        <tr>
            <th>Denumire</th> 
            <td>{{punct.Denumire}}</td>
        </tr>
        <tr>
            <th>CoordonataX</th> 
            <td>{{punct.CoordonataX}}</td>
        </tr>
        <tr>
            <th>CoordonataY</th> 
            <td>{{punct.CoordonataY}}</td>
        </tr>
        <tr>
            <th>EsteVizibil</th> 
            <td>
                <input v-if="punct.EsteVizibil" type="checkbox" checked disabled >
                <input v-else type="checkbox" disabled>
            </td>
        </tr>
        <tr>
            <th>Data Creare</th> 
            <td>{{new Date(punct.CreatLa).toLocaleString()}}</td>
        </tr>
    </table>
    <br>
    <br>
</template>


<script>
import axios from "axios";

export default {
    name: "Info",
    props: {
        id: String
    },
    data() {
        return {
            punct: '',
        }
    },

    async created() {
        this.punct = await this.getPunct();
    },

    methods: {
        async getPunct() {
            try { 
                const res = await axios.get(`http://localhost:3000/punct/${this.id}`);
                return res.data;
            } catch(e) {
                console.log(e);
            }
        },
    },

    
}

</script>

<style scoped>
table {
    width: 75%;
    font-size: 1.5em;
    text-align: left;
    border-collapse: separate;
    border-spacing: 1em 0.2em;
}


</style>