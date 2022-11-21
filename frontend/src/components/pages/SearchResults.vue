<script>
import axios from "axios";
import searchBar from '../searchBar.vue'
import roundDetail from '../roundDetail.vue'

export default {
  components: {
    searchBar,
    roundDetail
  },
  data() {
    return {
      books: [],
      description: "",
      title: "",
      rounds: [
        { number: 1, winner: 'Player' },
        { number: 2, winner: 'Player' },
        { number: 3, winner: 'Computer' },
      ]
    };
  },
  async mounted() {
    const response = await axios.get("/api/books/country/" + "germany");
    this.books = response.data;
  },
  methods:{
    deleteRound(number) {
      this.rounds = this.rounds.filter((round) => round.number != number);
    }
  }

}

</script>

<template>
  <div>
    <round-detail v-for="round in rounds" 
        v-on:delete-round='deleteRound($event)' 
        v-bind:key='round.number'
        v-bind:number='round.number' 
        v-bind:winner='round.winner'>
    </round-detail>

      <searchBar/>
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
            <p>Third mediaTab content</p>
          </mediaTab>
          <mediaTab name="Podcasts">
            <p>Fourth mediaTab content</p>
          </mediaTab>
          <mediaTab name="Movies">
            <p>Fifth mediaTab content</p>
          </mediaTab>
      </mediaTabs>
  </div>
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