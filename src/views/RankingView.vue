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

      <p>
        As notas são baseadas na metodologia SCA (Specialty Coffee Association).
      </p>

      <p>
        Cada critério recebe uma nota de 0 a 10 e a média final determina a classificação.
      </p>

    </section>

  </main>

</template>

<style scoped>
.ranking {
  margin: 30px 40px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
}

.titulo h1 {
  margin: 0;
  font-size: 2rem;
  color: #320d0d;
}

.titulo p {
  margin-top: 10px;
  color: #666;
}

.total-cafes {
  width: 260px;
  background: white;
  border: 1px solid #ececec;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
  padding: 20px;
  text-align: center;
}

.total-cafes h2 {
  margin: 0;
  font-size: 1.1rem;
  color: #320d0d;
}

.total-cafes p {
  margin-top: 12px;
  font-size: 3rem;
  font-weight: bold;
  color: #320d0d;
}

.cabecalho-lista {
  display: grid;
  grid-template-columns: 90px 2fr 2fr 1.4fr 150px;
  padding: 18px 22px;
  background: white;
  border: 1px solid #ececec;
  border-bottom: none;
  border-radius: 14px 14px 0 0;
  font-weight: 600;
  color: #320d0d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}

.informacoes {
  margin-top: 35px;
  background: #ede8d0;
  border: 1px solid #ececec;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
  padding: 25px;
}

.informacoes h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #320d0d;
}

.informacoes p {
  color: #666;
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

  .total-cafes p {
    font-size: 2.3rem;
  }
}
</style>