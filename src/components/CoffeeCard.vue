<script setup>
defineProps(['coffee'])
</script>

<template>
  <div class="coffee-card">
    <h2>{{ coffee.nome }}</h2>

    <p><strong>Origem:</strong> {{ coffee.origem }}</p>

    <p v-if="coffee.produtor">
      <strong>Produtor:</strong> {{ coffee.produtor }}
    </p>

    <p class="média" v-if="coffee.media">
      <strong>Média:</strong> {{ coffee.media.toFixed(1) }}
    </p>
  </div>
</template>

<style scoped>
.coffee-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

h2{
  margin-top:0;
  color:#320d0d;
}

p{
  margin:8px 0;
}


</style>