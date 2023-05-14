import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiKey: '23250c7046fa0b32c287b29c22cd6d57',
  movies: [],

})