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
    }
  },
  watch: {
    country: async function () {
      const response = await axios.get("/api/encyclopedias/" + this.country);
      this.content = await response.data;
      this.id = await this.content[0].id;
      this.url = await this.content[0].url;
      this.overview = await this.content[0].overview;
    }
  },
}

</script>

<template>
  <div>
    <h2>Country: {{ country }}</h2>
    <h3>Overview</h3>
    <p>Content: {{ overview }}</p>

  </div>
</template>


<style>

</style>