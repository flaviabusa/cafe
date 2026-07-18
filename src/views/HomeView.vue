<script setup>
import { computed } from "vue";
import { coffees } from "@/data/coffees";
import { RouterLink } from "vue-router";

const totalCafes = computed(() => coffees.value.length);

const melhorCafe = computed(() => {
  return [...coffees.value].sort((a, b) => b.media - a.media)[0];
})

const ultimaAvaliacao = computed(() => {
  return coffees.value[coffees.value.length - 1];
})
</script>

<template>
  <section class="home">
    <div class="banner">
      <div>
        <p>
          <img src="/img-cafe-home.png" alt="img-cafe-home" class="imagem-banner">
        </p>
      </div>
      <div class="texto-banner">
        <h1>Campeonato de Avaliação de Qualidade de Café</h1>
        <p class="descricao">
          Avalie, compare e descubra os melhores cafés especiais
        </p>
      </div>

    </div>

    <div class="cards">
      <div class="card">
        <h3>Total de Cafés</h3>
        <p class="numero">{{ totalCafes }}</p>
        <p>café(s)</p>
      </div>

      <div class="card">
        <h3>Café com Maior Nota</h3>
        <p class="numero">
          {{ melhorCafe.media }}
        </p>
        <p class="nome-cafe">
          {{ melhorCafe.nome }}
        </p>
        <p class="produtor">
          {{ melhorCafe.produtor }}
        </p>
      </div>

      <div class="card">
        <h3>Última Avaliação</h3>
        <p class="numero">
          {{ ultimaAvaliacao.media }}
        </p>
        <p class="nome-cafe">
          {{ ultimaAvaliacao.nome }}
        </p>
        <p class="produtor">
          {{ ultimaAvaliacao.data }}
        </p>
      </div>
    </div>
    <div class="acoes">
      <RouterLink to="/avaliacoes" class="botao">
        Ver Avaliações
      </RouterLink>

      <RouterLink to="/ranking" class="botao botao-secundario">
        Ver Ranking
      </RouterLink>
    </div>

    <div class="aviso">
      <p>
        <img src="/megafone-home.png" alt="megafone-home" class="img-aviso">
      </p>
      <div>
        <h2>Participe e faça a diferença!</h2>
        <p>
          Cada avaliação ajuda a reconhecer o trabalho dos produtores e a valorizar os cafés de qualidade.
        </p>
      </div>
    </div>
  </section>

</template>

<style scoped>
.banner {
  padding: 80px 40px 80px 40px;
  background-color: #ede8d0;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagem-banner {
  width: 350px;
  max-width: 100%;
  height: auto;
}

.texto-banner {
  margin-left: 50px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 600;
  color: #320d0d;
  margin-bottom: 5px;
}

.descricao {
  font-size: 1.5rem;
  color: #353535;
  margin-bottom: 35px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 60px 40px 30px 40px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 50px 15px 50px 15px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
}

.card h3 {
  font-size: 1.5rem;
  margin-top: 0;
  color: #320d0d;
}

.numero {
  font-size: 40px;
  font-weight: bold;
  color: #8B5E3C;
  margin: 10px 0 0;
}

.nome-cafe {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #320d0d;
}

.produtor {
  margin-top: 5px;
  color: #666;
}

.acoes {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 60px 0;
}

.botao {
  background: #320d0dc6;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  transition: .2s;
}

.botao:hover {
  background: #2a0b0b;
}

.botao-secundario {
  background: #8B5E3C;
}

.botao-secundario:hover {
  background: #744a2f;
}

.aviso {
  background-color: #ede8d0;
  border-radius: 20px;
  padding: 30px 15px;
  margin: 30px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
}

.img-aviso {
  width: 110px;
  height: auto;
}

.aviso h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #320d0d;
  margin-bottom: 10px;
}

.aviso p {
  font-size: 1.2rem;
  color: #320d0d;
  margin: 0;
}

/* Tablet */

@media (max-width: 992px) {

  .banner {
    padding: 50px 30px;
    flex-direction: column;
    text-align: center;
  }

  .texto-banner {
    margin-left: 0;
    margin-top: 25px;
  }

  .imagem-banner {
    width: 280px;
  }

  h1 {
    font-size: 2.5rem;
  }

  .descricao {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
    margin: 40px 20px;
  }

  .aviso {
    margin: 30px 20px;
    padding: 25px;
  }

  .img-aviso {
    width: 90px;
  }

  .aviso h2 {
    font-size: 1.6rem;
  }

  .aviso p {
    font-size: 1rem;
  }

}

/* Celular */

@media (max-width:768px) {

  .banner {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .imagem-banner {
    width: 220px;
    margin-bottom: 20px;
  }

  .texto-banner {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  .descricao {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .cards {
    grid-template-columns: 1fr;
    margin: 30px 10px;
  }

  .card {
    padding: 35px 15px;
  }

  .card h3 {
    font-size: 1.3rem;
  }

  .numero {
    font-size: 32px;
  }

  .acoes {
    flex-direction: column;
    align-items: center;
    margin: 40px 20px;
  }

  .botao {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }

  .aviso {
    flex-direction: column;
    text-align: center;
    margin: 20px 10px;
    padding: 25px 20px;
  }

  .img-aviso {
    width: 80px;
  }

  .aviso h2 {
    font-size: 1.5rem;
  }

  .aviso p {
    font-size: 1rem;
  }
}
</style>
