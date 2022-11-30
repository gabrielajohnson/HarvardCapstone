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
      this.countryChoice = country;
      sessionStorage.setItem("storedCountry", this.countryChoice);

      const bookResponse = await axios.get("/api/books/country/" + country);
      
      const articleResponse = await axios.get("/api/articles/country/" + country);

      const movieResponse = await axios.get("/api/movies/country/" + country);

      const podcastResponse = await axios.get("/api/podcasts/country/" + country);

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

  <div>
      <mediaTabs>

          <mediaTab name="Overview">
            <EncyclopediaResultDetail v-bind:country="countryChoice"/>
            
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

            <div>
              <router-link
              v-for="podcast in podcasts"
              :key="podcast.id"
              :to="{
               name: 'podcastMedia',
               params: { id: podcast.id},
              }" 
                >
            <span class="podcast">{{ podcast.title_original }}</span>
              </router-link>
            </div>

          </mediaTab>

          <mediaTab name="Movies">

            <div>
              <router-link
              v-for="movie in movies"
              :key="movie.id"
              :to="{
               name: 'movieMedia',
               params: { id: movie.id},
              }" 
                >
            <span class="movie">{{ movie.title }}</span>
              </router-link>
            </div>

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