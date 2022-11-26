<script>
import axios from "axios";
import searchBar from '../searchBar.vue'

export default {
  components: {
    searchBar,
  },
  data() {
    return {
      books: [],
      articles: [],
      description: "",
      title: "",
      countryModal: true
    };
  },
  methods:{
    async searchCountry(country){
      const bookResponse = await axios.get("/api/books/country/" + country);
      
      const articleResponse = await axios.get("/api/articles/country/" + country);

      this.books = bookResponse.data;
      this.articles = articleResponse.data;
      this.countryModal = false;
    }
  }

}

</script>

<template>

  <searchBar v-bind:countryModal="countryModal" v-on:search-country='searchCountry($event)'/>

  <div>
      <mediaTabs>
          <mediaTab name="Overview">
            <p>First mediaTab content</p>
          </mediaTab>
          <mediaTab name="Books">
            <div>
              <router-link
              v-for="book in books"
              :key="book.id"
              :to="{
               name: 'bookMedia',
               params: { id: book.id},
              }" 
                >
            <span class="book">{{ book.volumeInfo.title }}</span>
              </router-link>
            </div>
          </mediaTab>
          <mediaTab name="Articles">
            <div>
              <router-link
              v-for="article in articles"
              :key="article.id"
              :to="{
               name: 'articleMedia',
               params: { id: article.id},
              }" 
                >
            <span class="article">{{ article.headline.main }}</span>
              </router-link>
            </div>
          </mediaTab>
          <mediaTab name="Podcasts">
            <p>Fourth mediaTab content</p>
          </mediaTab>
          <mediaTab name="Movies">
            <p>Fifth mediaTab content</p>
          </mediaTab>
      </mediaTabs>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.tabs-component-tabs{
  display: flex;
  justify-content: space-around;
}

.tabs-component-tab {
    background: white;
    padding: 10px;
    border-radius: 30px;
    width: 150px;
    text-align: center;
}

</style>