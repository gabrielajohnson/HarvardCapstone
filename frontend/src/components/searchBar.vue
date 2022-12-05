<template>
   <div class="search-bar">


      <input type="text" v-model="searchInput" placeholder="Search countries..."/>
     
      <div v-show="(searchInput && localCountryModal)" class = "country-modal">

            <div class="item country" v-for="country in filteredList()" :key="country">

               <p v-on:click="$emit('search-country', country);closeModal();">{{ country }}</p>

            </div>

      </div>

   <div class="item error" v-if="searchInput&&!filteredList().length">
        <p>No results found!</p>
     </div>
   </div>

</template>

<script>
  import { ref } from "vue";

   export default{
      data(){
         return{
            localCountryModal: this.countryModal,
            selected: '',
            searchInput: ref(""),
            countries: ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czechia","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]
         };
      },
      props: ['countryModal'],
      watch: {
         selected(newValue){
            this.$emit('selected-year-changed', newValue);
         }
      },
      methods: {
         filteredList() {
            this.localCountryModal = true;

            return this.countries.filter((country) =>
            country.toLowerCase().includes(this.searchInput.toLowerCase())
            );
         },
         closeModal(){
            this.searchInput = ref("");
         }
     }
   }

      
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

body{
   background-color: rgb(234, 242, 255);
}

.country-modal{
   background: rgb(178 178 178);
   position: fixed;
   top: 120px;
   width: 100%;
   height: calc(100% - 120px);
   overflow-y: scroll;
   z-index: 1000;
   padding-top: 10px;
}

.search-bar{
   margin-bottom: 10px;
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  background: white;
  margin: 0 auto 10px auto;
  color: black;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
  rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;
}

.item:hover{
   background: #a083bd;
   color: white;
}

.item p{
   padding: 10px 20px;
}

.fruit {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>