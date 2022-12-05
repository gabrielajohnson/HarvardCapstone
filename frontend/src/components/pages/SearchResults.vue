<script>
import axios from "axios";
import searchBar from '../searchBar.vue'
import EncyclopediaResultDetail from './/resultPages/EncyclopediaResultDetail.vue'

export default {
  components: {
    searchBar,
    EncyclopediaResultDetail
  },
  data() {
    return {
      books: [],
      articles: [],
      movies: [],
      podcasts: [],
      description: "",
      title: "",
      countryChoice: "",
      countryModal: true
    };
  },
  mounted() {
    this.countryChoice = sessionStorage.getItem("storedCountry");
    this.searchCountry(this.countryChoice);
  },
  methods:{
    async searchCountry(country){
      this.countryChoice = country.toLowerCase();
      
      sessionStorage.setItem("storedCountry", this.countryChoice);

      const bookResponse = await axios.get("/api/books/country/" + this.countryChoice);
      
      const articleResponse = await axios.get("/api/articles/country/" + this.countryChoice);

      const movieResponse = await axios.get("/api/movies/country/" + this.countryChoice);

      const podcastResponse = await axios.get("/api/podcasts/country/" + this.countryChoice);

      this.books = bookResponse.data;
      this.articles = articleResponse.data;
      this.movies = movieResponse.data;
      this.podcasts = podcastResponse.data;

      this.countryModal = false;
    }
  }

}

</script>

<template>

  <searchBar v-bind:countryModal="countryModal" v-on:search-country='searchCountry($event)'/>

  <div class = "search-results">
      <mediaTabs>
          <div class="tab-anchor" id="overview"></div>
          <mediaTab name="Overview">
            <div class="results-list">
              <EncyclopediaResultDetail v-bind:country="countryChoice"/>
            </div>
            
          </mediaTab>
              <div class="tab-anchor" id="books"></div>
          <mediaTab name="Books">

            <div class="results-list">
              <router-link
              v-for="book in books"
              :key="book.id"
              :to="{
               name: 'bookMedia',
               params: { id: book.id},
              }" 
                >
            <span class="list-row">{{ book.volumeInfo.title }}</span>
              </router-link>
            </div>

          </mediaTab>
              <div class="tab-anchor" id="articles"></div>
          <mediaTab name="Articles">

            <div class="results-list">
              <router-link
              v-for="article in articles"
              :key="article.id"
              :to="{
               name: 'articleMedia',
               params: { id: article.id},
              }" 
                >
            <span class="list-row">{{ article.headline.main }}</span>
              </router-link>
            </div>

          </mediaTab>
              <div class="tab-anchor" id="podcasts"></div>
          <mediaTab name="Podcasts">

            <div class="results-list">
              <router-link
              v-for="podcast in podcasts"
              :key="podcast.id"
              :to="{
               name: 'podcastMedia',
               params: { id: podcast.id},
              }" 
                >
            <span class="list-row">{{ podcast.title_original }}</span>
              </router-link>
            </div>

          </mediaTab>
              <div class="tab-anchor" id="movies"></div>
          <mediaTab name="Movies">

            <div class="results-list">
              <router-link
              v-for="movie in movies"
              :key="movie.id"
              :to="{
               name: 'movieMedia',
               params: { id: movie.id},
              }" 
                >
            <span class="list-row">{{ movie.title }}</span>
              </router-link>
            </div>

          </mediaTab>

      </mediaTabs>
  </div>
</template>

<style>
/*@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";*/

</style>