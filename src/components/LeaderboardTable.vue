<script setup>

defineProps({
    coffees: Array
})

function posicao(index) {

    if (index == 0) {
        return "🥇 1º";
    }

    if (index == 1) {
        return "🥈 2º";
    }

    if (index == 2) {
        return "🥉 3º";
    }

    return `${index + 1}º`;

}

</script>

<template>
    <div class="ranking">
        <div class="linha" v-for="(coffee, index) in coffees" :key="coffee.id">

            <div class="posicao">
                {{ posicao(index) }}
            </div>

            <div class="informacoes">
                <h3>{{ coffee.nome }}</h3>
                <p>{{ coffee.produtor }}</p>
            </div>

            <div class="media">
                {{ coffee.media.toFixed(1) }}
            </div>
        </div>
    </div>

</template>

<style scoped>

.ranking {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.linha {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}

.posicao {
    width: 90px;
    font-size: 22px;
    font-weight: bold;
    color: #320d0d;
}

.informacoes {
    flex: 1;
}

.informacoes h3 {
    margin: 0;
    color: #320d0d;
}

.informacoes p {
    margin-top: 5px;
    color: #777;
}

.media {
    font-size: 30px;
    font-weight: bold;
    color: #8B5E3C;
}

@media(max-width:768px) {

    .linha {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }

    .informacoes {
        margin: 0;
    }

    .media {
        font-size: 24px;
    }

}
</style>