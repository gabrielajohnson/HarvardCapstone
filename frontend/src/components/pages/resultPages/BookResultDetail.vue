<script>
import axios from "axios";
export default {
  props: ['id'],
  data() {
    return {
      book: {},
      country: String,
      selfLink: String,
      title: String,
      subtitle: String,
      authors: Array,
      publisher: String,
      publishedDate: String,
      description: String,
      pageCount: String,
      imageLinks: {},
      language: String,
      previewLink: String,
      infoLink: String,
      canonicalVolumeLink: String,
      listPriceAmount: Number,
      listPriceCurrencyCode: String,
      retailPriceAmount: Number,
      retailPriceCurrencyCode: String,
      buyLink: String,
      pdf: String

    }
  },
  async mounted() {

    const response = await axios.get("/api/books/" + this.id);
    this.book = await response.data;
    this.country = await this.book[0].country;
    this.selfLink = await this.book[0].selfLink;
    this.title = await this.book[0].volumeInfo.title;
    this.subtitle = await this.book[0].volumeInfo.subtitle;
    this.authors = await this.book[0].volumeInfo.authors;
    this.publisher = await this.book[0].volumeInfo.publisher;
    this.publishedDate = await this.book[0].volumeInfo.publishedDate;
    this.description = await this.book[0].volumeInfo.description;
    this.pageCount = await this.book[0].volumeInfo.pageCount;
    this.imageLinks = await this.book[0].volumeInfo.imageLinks;


    
    this.language = await this.book[0].volumeInfo.language;
    this.previewLink = await this.book[0].volumeInfo.previewLink;
    this.infoLink = await this.book[0].volumeInfo.infoLink;
    this.canonicalVolumeLink = await this.book[0].volumeInfo.canonicalVolumeLink;


    //this.listPriceAmount = await this.book[0].saleInfo.listPrice.amount;
    //this.listPriceCurrencyCode = await this.book[0].saleInfo.listPrice.currencyCode;
    //this.retailPriceAmount = await this.book[0].saleInfo.retailPrice.amount;
    //this.retailPriceCurrencyCode = await this.book[0].saleInfo.retailPrice.currencyCode;
    //this.buyLink = await this.book[0].saleInfo.buyLink;
    this.pdf = await this.book[0].accessInfo.pdf.isAvailable;
  },
}

</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
    <a :href="previewLink" class="button" target="_blank">View Book</a>

    <div v-if="authors.length == 1">
      <p><b>Author: </b><span>{{ authors[0] }}</span></p>
    </div>
    <div v-else>
      <p><b>Authors</b></p>
      <ul v-for="author in authors" :key="author">
        <li>{{ author }}</li>
      </ul>
    </div>

    <p><b>Published </b> {{ publisher }}</p>
    <p><b>Published Date </b> {{ publishedDate }}</p>
    <p>{{ description }}</p>
    <p v-if="typeof pageCount != 'function'">{{ pageCount }}</p>
    <img :src="imageLinks.thumbnail" />
    <p>Image {{ imageLinks }}</p>
    <p v-if="typeof listPriceAmount != 'function'">List Price: {{ listPriceAmount }}</p>
    <p v-if="typeof listPriceCurrencyCode != 'function'">{{ listPriceCurrencyCode }}</p>
    <p v-if="typeof retailPriceAmount != 'function'">Retail Price: {{ retailPriceAmount }}</p>
    <p v-if="typeof retailPriceCurrencyCode != 'function'">{{ retailPriceCurrencyCode }}</p>
    <p v-if="typeof buyLink != 'function'">Buy Link: {{ book.saleInfo.buyLink }}</p>
    <p v-if="typeof pdf != 'function'">{{ pdf }}</p>

  </div>
</template>


<style>

</style>