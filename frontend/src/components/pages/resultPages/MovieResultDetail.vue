<script>
import axios from "axios";
export default {
  props: ['id'],
  data() {
    return {
      movie: {},
      country: String,
      adult: Boolean,
      backdrop_path: String,
      genre_ids: Array,
      original_language: String,
      original_title: String,
      overview: String,
      popularity: Number,
      poster_path: String,
      release_date: String,
      title: String,
      video: Number,
      vote_average: Number,
      vote_count: Number,
      genres:[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
    }
  },
  async mounted() {
    const response = await axios.get("/api/movies/" + this.id);
    this.movie = await response.data;
    this.country = await this.movie[0].country;
    this.adult = await this.movie[0].adult;
    this.backdrop_path = await this.movie[0].backdrop_path;
    this.genre_ids = await this.movie[0].genre_ids;
    this.original_language = await this.movie[0].original_language;
    this.original_title = await this.movie[0].original_title;
    this.overview = await this.movie[0].overview;
    this.popularity = await this.movie[0].popularity;
    this.poster_path = await this.movie[0].poster_path;
    this.release_date = await this.movie[0].release_date;
    this.title = await this.movie[0].title;
    this.video = await this.movie[0].video;
    this.vote_average = await this.movie[0].vote_average;
    this.vote_count = await this.movie[0].vote_count;

  },
}

</script>

<template>
  <div class = "movieDetail">
    <h2>{{ title }}</h2>
    <p>{{ release_date }}</p>
    <p v-if="adult">This is an <b>adult</b> film</p>
    <img v-if="backdrop_path != null" :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + backdrop_path"/>

    <img v-if="backdrop_path == null && poster_path != null" :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+ poster_path"/>
    
    <p>Rating: {{ vote_average }} out of 10</p>
    <p>Vote Count: {{ vote_count }}</p>
    
    <a v-bind:href="'https://www.themoviedb.org/movie/'+ this.id" target="_blank" class="button">View Movie</a>
    
    <p>
    <span v-for="genre in genre_ids" :key="genre.id">
      {{ genres.find(({ id }) => id === genre).name }} 
    </span>
    </p>
    <!--<p>{{ original_language }}</p>-->
    <p>{{ original_title }}</p>
    <p>{{ overview }}</p>
    <p>{{ popularity }}</p>
    <p>{{ video }}</p>

  </div>
</template>


<style>

</style>