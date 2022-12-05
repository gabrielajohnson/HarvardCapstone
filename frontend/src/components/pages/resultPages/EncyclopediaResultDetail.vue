<script>
import axios from "axios";
export default {
  props: ['country'],
  data() {
    return {
      content: {},
      id: String,
      url: String,
      overview: String,
      title: String
    }
  },
  watch: {
    country: async function () {
      const response = await axios.get("/api/encyclopedias/" + this.country.toLowerCase());
      this.content = await response.data;
      this.title = await this.content[0].country;
      this.id = await this.content[0].id;
      this.url = await this.content[0].url;
      this.overview = await this.content[0].overview;

      this.title = this.title.replace(this.title[0],this.title[0].toUpperCase());

      this.updateOverview();
    }
  },
  methods: {
    updateOverview(){
      this.overview = this.overview.replace(/(<)(.*?)(>)/g,"");
    }
  }
}

</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Overview</h3>
    <p>{{ overview }}</p>

  </div>
</template>


<style>
@import '../../../assets/css/style.css';
</style>

