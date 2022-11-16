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
  </nav>
    <ul>
      <li>
        <router-link v-for="link in links"
         v-bind:key="link"
         v-bind:to="paths[link]"
         exact
         :data-test="link + '-link'">
          {{ link }}
        </router-link>
      </li>
    </ul>

    <router-view></router-view>


  <!--<div class="main-container">
    <SearchResults></SearchResults>
  </div>-->
  </div>
</template>

<style>

*{
  font-family:arial; 
}

a{
  text-decoration: none;
}

body{
  margin: 0;
}

nav{
  background:lightgrey;
  text-align: left;
}

.main {
  margin: auto;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

 h3{
  font-size: 20px;
  margin: 0;
  font-weight: normal;
  padding:10px;
}

.input {
  width: 100%;
  padding: 10px;
}

.submit-button {
  width: 400px;
  padding: 10px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-container ul {
  width: 100%;
  list-style: none;
  padding: 0;
}

.main-container ul li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.book {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  max-width: 250px;
}

.book-name {
  font-size: 18px;
}

.book-description {
  max-width: 70%;
  font-size: 14px;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
}
</style>