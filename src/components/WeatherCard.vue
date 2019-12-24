<template>
  <v-card class="mx-auto text-center" color="transparent" flat>
    <v-card-text>
      <div class="font-weight-light display-1 text-center">{{ temperature }} Cº</div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    temperature: "-",
    time: null,
    precipitation: false,
    text: ""
  }),
  async created() {
    const buenosAires = 7894;
    const saintMichael = 7628;
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${saintMichael}`;
    const res = await axios.get(url, {
      params: {
        apikey: "Jtrt6SeGTfZGTNuQlA6VTOIUWFdYcenA",
        language: "es-AR"
      }
    });
    // const [obj] = res.data
    const obj = res.data[0];
    this.temperature = obj.Temperature.Metric.Value;
    this.time = obj.LocalObservationDateTime;
    this.text = obj.WeatherText;
    this.precipitation = obj.HasPrecipitation;
  }
  // created () {
  //   const buenosAires = 7894
  //   const saintMichael = 7628
  //   const url = `http://dataservice.accuweather.com/currentconditions/v1/${saintMichael}`
  //   axios.get(url, {
  //     params: {
  //       apikey: 'Jtrt6SeGTfZGTNuQlA6VTOIUWFdYcenA',
  //       language: 'es-AR'
  //     }
  //   }).then((res) => {
  //     // const [obj] = res.data
  //     const obj = res.data[0]
  //     this.temperature = obj.Temperature.Metric.Value
  //     this.time = obj.LocalObservationDateTime
  //     this.text = obj.WeatherText
  //     this.precipitation = obj.HasPrecipitation
  //   })
  // }
};
</script>
