<script setup>
import { computed } from 'vue'
import { coffees } from '@/data/coffees'
import LeaderboardTable from '@/components/LeaderboardTable.vue'

const ranking = computed(() => {
  return [...coffees.value].sort((a, b) => b.media - a.media)
})
</script>

<template>
  <main class="ranking">
    <section class="cabecalho">
      <div class="titulo">
        <h1> Ranking Geral</h1>
        <p>
          Classificação dos melhores cafés do campeonato.
        </p>
      </div>

      <div class="total-cafes">
        <h2>Total de Cafés Avaliados</h2>
        <p>{{ coffees.length }}</p>
      </div>
    </section>

    <div class="cabecalho-lista">
      <span>Posição</span>
      <span>Café</span>
      <span>Produtor</span>
      <span>Nota Final (Média SCA)</span>
      <span>Ações</span>
    </div>

    <LeaderboardTable :coffees="ranking" />

    <section class="informacoes">
      <h3>Como funciona a pontuação?</h3>
      <p>As notas são baseadas na metodologia SCA (Specialty Coffee Association).</p>
      <p>Cada critério recebe uma nota de 0 a 10 e a média final determina a classificação.</p>
    </section>

  </main>
</template>

<style scoped>
.ranking {
  margin: 30px 40px 30px 40px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 45px;
}

.titulo h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #320d0ddc;
}

.titulo p {
  font-size: 1.2rem ;
  font-weight: 600;
  color: #320d0ddc;
}

.total-cafes {
  width: 260px;
  background: white;
  border: 1px solid #ececec;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
  padding: 10px 20px;
  text-align: center;
}

.total-cafes h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #320d0dce;
}

.total-cafes p {
  margin-top: 8px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #320d0d;
}

.cabecalho-lista {
  display: grid;
  grid-template-columns: 90px 2fr 2fr 1.4fr 150px;
  padding: 18px 22px;
  background: #ececec52;
  border: 1px solid #ececec;
  border-bottom: none;
  border-radius: 14px 14px 0 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}
.cabecalho-lista span{
  font-size: 1.2rem;
  font-weight: 600;
  color: #320d0d;
}

.informacoes {
  margin-top: 45px;
  margin-bottom: 45px;
  background: #ede8d0;
  border: 1px solid #ede8d0;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .08);
  padding: 30px;
}

.informacoes h3 {
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 12px;
  color: #320d0d;
}

.informacoes p {
  color: #320d0dce;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.7;
}

/* Tablet */
@media(max-width:992px) {
  .ranking {
    margin: 25px;
  }

  .cabecalho {
    flex-direction: column;
    align-items: stretch;
  }

  .total-cafes {
    width: auto;
    margin-top: 20px;
  }

  .cabecalho-lista {
    display: none;
  }
}

/* Celular */
@media(max-width:768px) {
  .ranking {
    margin: 15px;
  }

  .titulo h1 {
    font-size: 1.7rem;
  }

  .total-cafes {
    margin-top: 20px;
  }

  .cabecalho-lista {
    display: none;
  }
}
</style>