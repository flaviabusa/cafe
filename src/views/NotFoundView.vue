<script setup>
import { RouterLink } from "vue-router";
</script>

<template>

    <section class="not-found">
        <h1>Erro 404</h1>
        <p>
            Ops! A página que você tentou acessar não existe.
        </p>

        <RouterLink to="/" class="botao">
            Voltar para a Home
        </RouterLink>
    </section>

</template>

<style scoped>
.not-found {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
}

h1 {
    color: #320d0d;
    font-size: 3rem;
    margin-bottom: 10px;
}

p {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.botao {
    background: #320d0dc6;
    color: white;
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: bold;
    transition: .2s;
}

.botao:hover {
    background: #2a0b0b;
}

/* Tablet */

@media(max-width:992px) {

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.1rem;
    }

    .imagem {
        width: 180px;
    }

}

/* Celular */

@media(max-width:768px) {

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    .imagem {
        width: 150px;
    }

    .botao {
        width: 100%;
        max-width: 250px;
        text-align: center;
    }

}
</style>