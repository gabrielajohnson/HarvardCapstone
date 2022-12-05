<script>
import axios from "axios";
/*import SearchResults from './components/pages/SearchResults.vue'*/

export default {
  name: "App",
  components: {
    /*SearchResults*/
  },
  data() {
    return {
      links: ['Home','Search'],
      paths: {
        Home: '/',
        Search: '/search'
      },
      books: [],
      description: "",
      title: "",
    };
  },
  async mounted() {
    const response = await axios.get("api/books/");
    this.books = response.data;
  },
  methods: {
    async addBook(e) {
      e.preventDefault();
      const response = await axios.post("api/books/", {
        title: this.title,
        description: this.description
      });
      this.books.push(response.data);
      this.title = "";
      this.description = "";
    },
    async removeBook(item, i) {
      await axios.delete("api/books/" + item._id);
      this.books.splice(i, 1);
    },
  }
};
</script>

<template>

 <div class="main">
  <nav>
    <h3>Learning Locus</h3>
    <ul>
      <router-link v-for="link in links"
         v-bind:key="link"
         v-bind:to="paths[link]"
         exact
         :data-test="link + '-link'">
          <li>{{ link }}</li>
      </router-link>
    </ul>
  </nav>

    <router-view></router-view>


  <!--<div class="main-container">
    <SearchResults></SearchResults>
  </div>-->
  </div>
</template>

<style>
@import './assets/css/style.css';
</style>