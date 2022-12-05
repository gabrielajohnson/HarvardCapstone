<script>
import axios from "axios";
export default {
  props: ['id'],
  data() {
    return {
      podcast: {},
      country: String,
      audio: String,
      audio_length_sec: String,
      description_highlighted: String,
      description_original: String,
      title_original: String,
      title_highlighted: String,
      image: String,
      thumbnail: String,
      itunes_id: String,
      listennotes_url: String,
      explicit_content: String,
      link: String,
      podcast_listennotes_url: String,
      podcast_id: String,
      podcast_title_highlighted: String,
      podcast_title_original: String,
      podcast_publisher_original: String,
      podcast_image: String,
      podcast_thumbnail: String,
      podcast_genre_ids: Array


    }
  },
  async mounted() {
    const response = await axios.get("/api/podcasts/" + this.id);
    this.podcast = await response.data;
    this.country = await this.podcast[0].country;
    this.audio = await this.podcast[0].audio;
    this.audio_length_sec = await this.podcast[0].audio_length_sec;
    this.description_highlighted = await this.podcast[0].description_highlighted;
    this.description_original = await this.podcast[0].description_original;
    this.title_original = await this.podcast[0].title_original;
    this.title_highlighted = await this.podcast[0].title_highlighted;
    this.image = await this.podcast[0].image;
    this.thumbnail = await this.podcast[0].thumbnail;
    this.itunes_id = await this.podcast[0].itunes_id;
    this.listennotes_url = await this.podcast[0].listennotes_url;
    this.explicit_content = await this.podcast[0].explicit_content;
    this.link = await this.podcast[0].link;
    this.podcast_listennotes_url = await this.podcast[0].podcast.listennotes_url;
    this.podcast_id = await this.podcast[0].podcast.id;
    this.podcast_title_highlighted = await this.podcast[0].podcast.title_highlighted;
    this.podcast_title_original = await this.podcast[0].podcast.title_original;
    this.podcast_publisher_original = await this.podcast[0].podcast.publisher_original;
    this.podcast_image = await this.podcast[0].podcast.image;
    this.podcast_thumbnail = await this.podcast[0].podcast.thumbnail;
    this.podcast_genre_ids = await this.podcast[0].podcast.genre_ids;

    var desc_Highlighted = document.getElementById('descHighlighted');
    desc_Highlighted.innerHTML = this.description_highlighted;

    var desc_Original = document.getElementById('descOriginal');
    desc_Original.innerHTML = this.description_original;
  },
}

</script>

<template>
  <div>
    <h2>{{ title_original }}</h2>
    <!--<p>{{ title_highlighted }}</p>-->
    <h3>Podcast: {{ podcast_title_highlighted }}</h3>
    <!--<p>{{ podcast_title_original }}</p>-->
    <a :href="audio" class="button" target="_blank">View Podcast</a>
    <p>{{ audio_length_sec }}</p>
    <p id="descHighlighted"></p>
    <p id="descOriginal">{{ description_original }}</p>
    <p>{{ image }}</p>
    <p>{{ thumbnail }}</p>
    <p>{{ itunes_id }}</p>
    <p>{{ listennotes_url }}</p>
    <p>{{ explicit_content }}</p>
    <p>{{ link }}</p>
    <p>{{ podcast_listennotes_url }}</p>
    <p>{{ podcast_id }}</p>
    <p>{{ podcast_publisher_original }}</p>
    <p>{{ podcast_image }}</p>
    <p>{{ podcast_thumbnail }}</p>
    <p>{{ podcast_genre_ids }}</p>

  </div>
</template>


<style>

</style>