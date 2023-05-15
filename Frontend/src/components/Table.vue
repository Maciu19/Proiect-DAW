<template>
    <table>
        <tr>
            <th>Denumire</th>
            <th>CoordonataX</th>
            <th>CoordonataY</th>
            <th>EsteVizibil</th>
            <th>DataCreare</th>
        </tr>
        <tr v-for="punct in puncte">
            <td>{{punct.Denumire}}</td>
            <td>{{punct.CoordonataX}}</td>
            <td>{{punct.CoordonataY}}</td>
            <td>
                <input v-if="punct.EsteVizibil" type="checkbox" checked disabled >
                <input v-else type="checkbox" disabled>
            </td>
            <td>{{new Date(punct.CreatLa).toLocaleString()}}</td>
            <td>
                <router-link class="router" :to="'Edit/'+punct.PunctID">Edit</router-link> |
                <router-link class="router" :to="'Details/'+punct.PunctID" >Details</router-link> |
                <router-link class="router" :to="'Delete/'+punct.PunctID" >Delete</router-link> 
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "Table",
    props: {
        puncte: Array
    },
}
</script>

<style scoped>
table {
    border-top: 1px solid rgb(190, 184, 184);
    border-bottom: 1px solid rgb(190, 184, 184);
    text-align: left;
    border-spacing: 2em;
}

th {
    text-decoration: none;
    font-size: 1.4em;
}

td {
    font-size: 1.3em;
}

.router {
    text-decoration: none;
    color: rgb(41, 41, 160);
}

</style>