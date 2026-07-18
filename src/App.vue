<template>
  <header class="navbar">
    <div class="logo">
      <img src="/grao-de-cafe.png" alt="grao-de-cafe" />
      Coffee Quality Challenge
    </div>

    <nav class="nav-links">
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink class="nav-item" to="/ranking">Ranking</RouterLink>
      <RouterLink class="nav-item" to="/avaliacoes">Avaliações</RouterLink>
    </nav>
  </header>

  <main class="conteudo">
    <RouterView />
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h2>Coffee Quality Challenge</h2>
        <p>Descobrindo e valorizando os melhores cafés especiais.</p>
      </div>

      <div class="footer-right">
        <p>contato@coffeequality.com</p>
      </div>
    </div>

    <hr />

    <p class="copyright">
      © 2025 Coffee Quality Challenge. Todos os direitos reservados.
    </p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
:global(body) {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: #f8f8f8;
  color: #333;
}

:global(#app){
  min-height:100vh;
  display:flex;
  flex-direction:column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #320d0dc6;
}

.logo img {
  width: 26px;
}

.nav-links {
  display: flex;
  gap: 35px;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.router-link-active {
  color: #320d0dc6;
  border-bottom: 2px solid #320d0dc6;
  padding-bottom: 4px;
}


.footer{
  background:#320d0dc6;
  color:white;
  padding:35px 50px 15px;
}

.footer-content{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:40px;
}

.footer-left h2{
  margin:0;
  font-size:24px;
}

.footer-left p{
  margin-top:8px;
  font-size:15px;
  color:#ddd;
}

.footer-right{
  text-align:right;
}

.footer-right p{
  margin:0;
  font-size:16px;
  color:#ddd;
}

.footer hr{
  margin:25px 0 12px;
  border:none;
  border-top:1px solid rgba(255,255,255,.2);
}

.copyright{
  text-align:center;
  font-size:12px;
  color:#d2d2d2;
  margin:0;
}

@media (max-width:768px){

  .navbar{
    flex-direction:column;
    gap:20px;
    padding:20px;
  }

  .logo{
    font-size:20px;
    text-align:center;
  }

  .nav-links{
    width:100%;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
  }

  .conteudo{
    padding:20px;
  }

  .footer{
    padding:30px 20px 15px;
  }

  .footer-content{
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:20px;
  }

  .footer-right{
    text-align:center;
  }

}
</style>