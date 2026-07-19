<script setup>
import { RouterLink } from 'vue-router'

defineProps(['coffees'])
</script>

<template>
    <div class="lista-ranking">
        <div class="item" v-for="(coffee, index) in coffees" :key="coffee.id">
            <div class="coluna">
                <span class="posicao" v-if="index == 0">
                    <img class="podio" src="/primeiro-lugar.png" alt="medalha-primeiro-lugar">
                </span>

                <span class="posicao" v-else-if="index == 1">
                    <img class="podio" src="/segundo-lugar.png" alt="medalha-segundo-lugar">
                </span>

                <span class="posicao" v-else-if="index == 2">
                    <img class="podio" src="/terceiro-lugar.png" alt="medalha-terceiro-lugar">
                </span>

                <span class="posicao" v-else>{{ index + 1 }}º</span>
            </div>

            <div class="nome">
                {{ coffee.nome }}
            </div>

            <div class="coluna">
                {{ coffee.produtor }}
            </div>

            <div class="nota">
                {{ coffee.media }}
            </div>

            <div>
                <RouterLink :to="`/coffee/${coffee.id}`" class="botao-detalhes">
                    Ver Detalhes
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.lista-ranking {
    background: white;
    border: 1px solid #ececec;
    border-top: none;
    border-radius: 0 0 14px 14px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}

.item {
    display: grid;
    grid-template-columns: 90px 2fr 2fr 1.4fr 150px;
    align-items: center;
    padding: 18px 22px;
    border-bottom: 1px solid #ececec;
}

.item:last-child {
    border-bottom: none;
}

.nome {
    font-size: 1.2rem;
    font-weight: bold;
    color: #320d0ddc;
}

.coluna {
    font-size: 1.2rem;
    color: #320d0d;
}

.posicao {
    font-size: 1.6rem;
    font-weight: bold;
}

.podio{
    height: 40px;
    width: 40px;
}

.nota {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2e7d32;
}

.botao-detalhes {
    padding: 8px 12px;
    background: white;
    color: #320d0ddc;
    border: 1px solid #320d0d;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    transition: .2s;
}

.botao-detalhes:hover {
    background: #320d0ddc;
    color: white;
}

/* Tablet */
@media (max-width:992px) {
    .lista-ranking {
        border-top: 1px solid #ececec;
        border-radius: 14px;
    }

    .item-ranking {
        grid-template-columns: 1fr;
        gap: 12px;
        text-align: center;
    }

    .botao-detalhes {
        width: 100%;
    }
}

/* Celular */
@media (max-width:768px) {
    .item-ranking {
        padding: 18px;
    }
}
</style>