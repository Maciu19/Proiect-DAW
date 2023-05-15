<template>
    <form @submit="onSubmit">
        <br>
        <label for="denumire">Denumire: </label>
        <input type="text" id="denumire" name="denumire" v-model="denumire">
        <br>
        <br>
        <label for="coordonataX">Coordonata X: </label> 
        <input type="text" id="coordonataX" name="coordonataX" v-model.number="coordonataX">
        <br>
        <br>
        <label for="coordonataY">Coordonata Y: </label> 
        <input type="text" id="coordonataY" name="coordonataY" v-model.number="coordonataY">
        <br>
        <br>
        <label for="estevizibil">Este Vizibil: </label> 
        <input type="checkbox" id="estevizibil" name="estevizibil" v-model="estevizibil">
        <br>
        <br>
        <div v-if="(dataCreare === 'true')">
            <label for="datacreare">Data Creare: </label> 
            <input type="text" id="datacreare" name="datacreare" disabled>
            <br>
            <br>
        </div>
        <button type="submit">{{buttonValue}}</button> 
        
        <span>{{error}}</span> 
        <br>
        <br>
    </form>
</template>    

<script>
export default {
    name: "Form",
    data() {
        return {
            denumire: '',
            coordonataX: '',
            coordonataY: '',
            estevizibil: '',
        }
    },
    props: {
        buttonValue: String,
        dataCreare: String,
        error: String,
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.$emit("onSubmit", this.denumire, this.coordonataX, this.coordonataY, this.estevizibil);
        }
    }
}
</script>

<style scoped>
form {
    border-top: 1px solid rgb(190, 184, 184);
    border-bottom: 1px solid rgb(190, 184, 184);
}

label {
    font-size: 1.3em;
}

input {
    font-size: 1.2em;
}

button {
    font-size: 1em;
}
span {
    font-size: 1.4em;
    color: red;
}

</style>