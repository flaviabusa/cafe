<template>
  <header class="navbar">
    <div class="logo">
      Café
    </div>

    <nav class="nav-links">
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink class="nav-item" to="/ranking">Ranking</RouterLink>
      <RouterLink class="nav-item" to="/avaliacao">Avaliação</RouterLink>
    </nav>
  </header>

  <main class="conteudo">
    <!--Tudo que precisa ser renderizado pelas minhas rotas estará 
    dentro dessa tag conteudo, o reponsável por isso é RouterView-->
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(141, 141, 141);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item{
  color: black;
  text-decoration: none;
}

.nav-item:hover,
.nav-item.active{
  text-decoration: none;
  color: rgb(48, 17, 17);
}

.conteudo{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
