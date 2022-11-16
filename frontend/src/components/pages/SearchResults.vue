<script>
import axios from "axios";
export default {
  data() {
    return {
      books: [],
      description: "",
      title: "",
    };
  },
  async mounted() {
    const response = await axios.get("/api/books/country/germany");
    this.books = response.data;
  },
}
</script>

<template>
  <div>
    <ul>
      <li>Overview</li>
      <li>Books</li>
      <li>Articles</li>
      <li>Podcasts</li>
      <li>Movies</li>
    </ul>

    <div>
      <router-link
              v-for="book in books"
              :key="book.id"
              :to="{
               name: 'media',
               params: { id: book.id},
              }" 
          >
          <span class="book">{{ book.volumeInfo.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>