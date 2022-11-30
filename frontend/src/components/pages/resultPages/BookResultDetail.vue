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
      imageLinks: Object,
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
    this.imageLinks = await this.book[0].volumeInfo.imageLinks.thumbnail,
    this.listPriceAmount = await this.book[0].saleInfo.listPrice.amount;
    this.listPriceCurrencyCode = await this.book[0].saleInfo.listPrice.currencyCode;
    this.retailPriceAmount = await this.book[0].saleInfo.retailPrice.amount;
    this.retailPriceCurrencyCode = await this.book[0].saleInfo.retailPrice.currencyCode;
    this.buyLink = await this.book[0].saleInfo.buyLink;
    this.pdf = await this.book[0].accessInfo.pdf.isAvailable;
  },
}

</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ country }}</p>
    <p>{{ selfLink }}</p>
    <p>{{ subtitle }}</p>
    <ul v-for="author in authors" :key="author">
      <li>{{ author }}</li>
    </ul>
    <p>{{ publisher }}</p>
    <p>{{ publishedDate }}</p>
    <p>{{ description }}</p>
    <p>{{ pageCount }}</p>
    <p>Image {{ imageLinks }}</p>
    <p>List Price: {{ listPriceAmount }}</p>
    <p>{{ listPriceCurrencyCode }}</p>
    <p>{{ retailPriceAmount }}</p>
    <p>{{ retailPriceCurrencyCode }}</p>
    <p>Buy Link: {{ buyLink }}</p>
    <p>{{ pdf }}</p>

  </div>
</template>


<style>

</style>