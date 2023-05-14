<script>
import headerVue from "./components/header.vue";
import mainVue from "./components/main.vue";
import { store } from "./data/store";

export default {
  name: "App",
  components: {
    headerVue,
    mainVue,
  },
  data() {
    return {
      store,
    };
  },
}
</script>

<template>
  <div>
    <headerVue/>
    <mainVue/>
  </div>
</template>

<style lang="scss" scoped>
</style>