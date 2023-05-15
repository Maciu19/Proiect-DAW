<template>
    <div id="container"></div>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";
import { thisExpression } from "@babel/types";

export default {
    name: "Chart",
    data() {
        return {
            puncte : [],   
            nume: [],
        }
    },
    async created() {
        const pct = await this.getPuncte()
        for(const p of pct) {
            this.puncte.push([parseFloat(p.CoordonataX), parseFloat(p.CoordonataY)])
            this.nume.push(p.Denumire)
        }        
        this.makeChart()
    }, 
    methods: {
        async getPuncte() {
            try {
                const resp = await axios.get('http://localhost:3000/punct');
                return resp.data;
            } catch(e) {
                console.log(e);
            }
        }, 

        makeChart() {
            const chart = Highcharts.chart('container', {
                title: {
                    text: "Plotted Points"
                },
                xAxis: {
                    min: -10,
                    max: 10,
                    title: {
                        text: "X-Axis"
                    }
                },
                yAxis: {
                    min: -10,
                    max: 10,
                    title: {
                        text: "Y-Axis"
                    }
                },    
                series: [{
                    name: "Points",
                    type: 'scatter',
                    data: [...this.puncte],
                }]
            });
        }
    }
}
</script>