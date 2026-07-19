<template>
  <main class="avaliacao">

    <section class="lista-cafes">
      <h2>Avaliações de Cafés</h2>
      <p>Veja os cafés já avaliados e adicione uma nova avaliação</p>

      <div class="lista">
        <CoffeeCard v-for="coffee in coffees" :key="coffee.id" :coffee="coffee" />
      </div>
    </section>

    <section class="formulario">
      <RatingForm />
    </section>

  </main>
</template>

<script setup>
import { coffees } from '@/data/coffees'
import CoffeeCard from '@/components/CoffeeCard.vue'
import RatingForm from '@/components/RatingForm.vue'
</script>

<style scoped>
.avaliacao {
  display: flex;
  gap: 40px;
  margin: 30px 40px 30px 40px;
}

.lista-cafes {
  flex: 1;
}

.lista-cafes h2{
  font-size: 2rem;
  color: #320d0ddc;
  font-weight: bold;
}

.lista-cafes p{
  color:#320d0ddc ;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 40px;
}

.formulario {
  flex: 1;
}

.lista {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Tablet */
@media (max-width: 992px) {
  .avaliacao {
    flex-direction: column;
  }
}

/* Celular */
@media (max-width: 768px) {
  .avaliacao {
    padding: 10px;
  }
}
</style>