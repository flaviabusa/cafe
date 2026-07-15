<template>
  <header class="navbar">
    <div class="logo">
      <img src="../public/grao-de-cafe.png" alt="grao-de-cafe"> Coffee Quality Challenge
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
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  color: #320d0dc6;
}

.logo img{
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item{
  color: black;
  font-weight: 600;
  text-decoration: none;
}

.nav-item:hover,
.nav-item.active{
  text-decoration: none;
  color: #320d0dc6;
}

.router-link-active {
  color: #320d0dc6;
  border-bottom: 2px solid #320d0dc6;
}

.conteudo{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
