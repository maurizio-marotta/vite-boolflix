<script>
import { store } from "../data/store";
export default {
  name: "header",
  data() {
    return {
      store,
    };
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
        v-model="store.filmToSearch"/>

      <button type="button" class="btn btn-info" @click="$emit('searchMovie')">
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