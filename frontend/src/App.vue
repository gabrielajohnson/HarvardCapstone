<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
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
  <h3>Book List</h3>

  <form class="form" >
    <input class="input" v-model="title" type="text" name="name" placeholder="Enter book" />
    <br />
    <input class="input" v-model="description" type="text" name="description"  placeholder="Enter Description" />
    <br />
    <button class="submit-button" @click="addBook">Add Book</button>
  </form>
  <div class="book-container">
    <ul>
      <li v-for="(book, i) in books" :key="book._id">
        <div class="book">
        <span class="book-name">{{ book.title }}</span>
        <span class="book-description">{{ book.description }}</span>
      </div>
        <button class="delete-btn" @click="removeBook(book, i)">DELETE BOOK</button>
      </li>
    </ul>
  </div>
  </div>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 10vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: 25px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}
</style>
