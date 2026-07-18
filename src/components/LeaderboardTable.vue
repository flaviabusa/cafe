<script setup>
import { RouterLink } from 'vue-router'

defineProps(['coffees'])
</script>

<template>
    <div class="lista-ranking">
        <div class="item-ranking" v-for="(coffee, index) in coffees" :key="coffee.id">
            <div class="coluna posicao">
                <span v-if="index == 0">🥇</span>

                <span v-else-if="index == 1">🥈</span>

                <span v-else-if="index == 2">🥉</span>

                <span v-else>{{ index + 1 }}º</span>
            </div>

            <div class="coluna">
                {{ coffee.nome }}
            </div>

            <div class="coluna">
                {{ coffee.produtor }}
            </div>

            <div class="coluna nota">
                {{ coffee.media }}
            </div>

            <div class="coluna">
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

.item-ranking {
    display: grid;
    grid-template-columns: 90px 2fr 2fr 1.4fr 150px;
    align-items: center;
    padding: 18px 22px;
    border-bottom: 1px solid #ececec;
}

.item-ranking:last-child {
    border-bottom: none;
}

.coluna {
    color: #320d0d;
}

.posicao {
    font-size: 1.5rem;
    font-weight: bold;
}

.nota {
    font-weight: bold;
    color: #2e7d32;
}

.botao-detalhes {
    padding: 10px 16px;
    background: white;
    color: #320d0d;
    border: 1px solid #320d0d;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    transition: .2s;
}

.botao-detalhes:hover {
    background: #320d0d;
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