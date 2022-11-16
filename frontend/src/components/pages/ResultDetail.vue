<script>
import axios from "axios";
export default {
  props: ['id'],
  data() {
    return {
      book: Object,
      greeting: 'Hello World!'
    }
  },
  async mounted() {
    const response = await axios.get("/api/books/"+this.id);
    this.book = response.data;
  },
}
</script>

<template>
  <div>
    <p class="greeting">{{ greeting }}</p>
    <p class="greeting">{{ book }}</p>
  </div>
</template>


<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>