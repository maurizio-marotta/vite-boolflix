
<script>
export default {
  name: 'card',
  props:{
    movie: Object
  }
  
}
</script>

<template>

  <div class="card">
    <div class="card-body">
      <h4>Titolo: {{movie.title}}</h4>
      <h4>Titolo Originale: {{movie.original_title}}</h4>
      <h4>Lingua: {{movie.original_language}}</h4>
      <h4>Voto: {{movie.vote_average}}</h4>
    </div>
  </div>

</template>

<style lang="scss" scoped>
</style>