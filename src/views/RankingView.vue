<script setup>

import { computed } from "vue";
import { coffees } from "@/data/coffees";
import LeaderboardTable from "@/components/LeaderboardTable.vue";

const ranking = computed(() => {

  return [...coffees.value].sort((a, b) => b.media - a.media);

});

</script>

<template>

<section class="ranking">

  <h1>Ranking Geral</h1>

  <p class="descricao">
    Classificação dos melhores cafés do campeonato
  </p>

  <LeaderboardTable :coffees="ranking"/>

</section>

</template>

<style scoped>

.ranking{
  margin: 30px 40px 30px 40px;
}

h1{
  font-size: 2rem;
  color: #320d0ddc;
  font-weight: 600;
  margin-bottom: 10px;
}

.descricao{
  color:#320d0ddc ;
  font-weight: 600;
  margin-bottom: 40px;
}

</style>