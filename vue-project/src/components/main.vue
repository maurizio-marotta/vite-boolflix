<script>
import cardVue from "./card.vue";
import { store } from "../data/store";
export default {
  name: "main",
  components: {
    cardVue,
    store,
  },
  data(){
    return{
      store
    }
  }
};
</script>

<template>
  <div>
    <h4 v-if="store.movies [0]" >Titolo: {{ store.movies[0].title }}</h4>
    <h4 v-if="store.movies [0]" >Titolo originale: {{ store.movies[0].original_title}}</h4>
    <h4 v-if="store.movies [0]" >Lingua: {{ store.movies[0].original_language }}</h4>
    <h4 v-if="store.movies [0]" >Voto: {{ store.movies[0].popularity }}</h4>
  </div>
</template>

<style lang="scss" scoped>
</style>