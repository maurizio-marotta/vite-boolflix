<script>
import { store } from "../data/store";
import axios from "axios";
 

export default {
  name: "header",
  data() {
    return {
      store,
      text : ''
    }
  },
  methods : {
    searchMovie(){
      axios.get(store.apiUrl + '?query=' + this.text + '&api_key=' + store.apiKey) 
      .then(result => {
        store.movies = result.data.results
        console.log(result.data.results);
      })
    } 
  },

};
</script>

<template>
  <div class="container d-flex">
    <div class="nome">
      <h1>Boolflix</h1>
    </div>
    <div class="ricerca">
      <input
        type="text"
        class="me-3"
        placeholder="Cerca"
        v-model="text"/>

      <button type="button" @click="searchMovie">
        Cerca
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  justify-content: space-between;
  padding: 90px;
}
</style>