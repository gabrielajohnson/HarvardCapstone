<script>
import axios from "axios";
export default {
  props: ['id'],
  data() {
    return {
      article: {},
      country: String,
      abstract: String, 
      web_url: String,
      snippet: String,
      lead_paragraph: String,
      source: String,
      pub_date: String,
      document_type: String,
      type_of_material: String,
      headlineMain: String,
      multimediaUrl: String,
      multimediaPubDate: String,
      multimediaOriginal: String,
      multimediaOrganization: String
    }
  },
  async mounted() {
    const response = await axios.get("/api/articles/"+this.id);
    this.article = await response.data;
    this.country = await this.article[0].country;
    this.abstract = await this.article[0].abstract; 
    this.web_url = await this.article[0].web_url;
    this.snippet = await this.article[0].snippet;
    this.lead_paragraph = await this.article[0].lead_paragraph;
    this.source = await this.article[0].source;
    this.pub_date = await this.article[0].pub_date;
    this.document_type = await this.article[0].document_type;
    this.type_of_material = await this.article[0].type_of_material;
    this.headlineMain = await this.article[0].headline.main;
    this.multimediaUrl = await this.article[0].multimedia.url;
    this.multimediaPubDate = await this.article[0].multimedia.pub_date;
    this.multimediaOriginal = await this.article[0].byline.original;
    this.multimediaOrganization = await this.article[0].byline.organization;

  },
}

</script>

<template>
  <div>

    <p>Title: {{ headlineMain }}</p>
    <p>Date: {{ pub_date }}</p>
    <p>{{ country }}</p>
    <p>Url: {{ web_url }}</p>
    <p>Snippet: {{ snippet }}</p>
    <p>Abstract: {{ abstract }}</p>
    <p>Lead Paragraph: {{ lead_paragraph }}</p>
    <p>Source: {{ source }}</p>
    <p>Document Type: {{ document_type }}</p>
    <p>Type of Material: {{ type_of_material }}</p>
    <p>Multimedia Original: {{ multimediaOriginal }}</p>
    <p>Multimedia URL:  {{ multimediaUrl }}</p>
    <p>Multimedia Date:  {{ multimediaPubDate }}</p>
    <p> Multimedia Organization: {{ multimediaOrganization }}</p>


  </div>
</template>


<style>

</style>