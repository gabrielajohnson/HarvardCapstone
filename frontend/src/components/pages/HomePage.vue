<script>

export default {
  components: {
  },
  data() {
    return {
      countries:["Algeria","Germany","France","India","Brazil"],
      country: ''
    };
  },
  mounted() {
  },
  methods:{

  }

}

</script>

<template>
  <h2>Prefiltered Countries</h2>

  <router-link
    v-for="country in countries"
      :key="country.id" 
      to="/search"
      v-bind:homeCountry='country'
    >
      <span class="list-row">{{ country }}</span>
  </router-link>


</template>
