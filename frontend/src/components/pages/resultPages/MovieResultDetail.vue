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
      vote_count: Number

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
  <div>
    <p>{{ title }}</p>
    <p>{{ adult }}</p>
    <a v-bind:href="'https://www.themoviedb.org/movie/'+ this.id" target="_blank">View Movie</a>
    <p>{{ country }}</p>
    <p>{{ backdrop_path }}</p>
    <p>{{ genre_ids }}</p>
    <p>{{ original_language }}</p>
    <p>{{ original_title }}</p>
    <p>{{ overview }}</p>
    <p>{{ popularity }}</p>
    <p>{{ poster_path }}</p>
    <p>{{ release_date }}</p>
    <p>{{ video }}</p>
    <p>{{ vote_average }}</p>
    <p>{{ vote_count  }}</p>

  </div>
</template>


<style>

</style>