<script setup>
defineProps(['coffee'])
</script>

<template>
    <div class="card">

        <div class="icone">
            <img src="/cafe-cards.png" alt="grão-de-café">
        </div>

        <div class="informacoes">
            <h3>{{ coffee.nome }}</h3>
            <p>
                Produtor: {{ coffee.produtor }}
            </p>
            <p class="data">
                Avaliado em: {{ coffee.data }}
            </p>
        </div>

        <div class="media">
            <span>Média SCA</span>
            <h2>{{ coffee.media.toFixed(1) }}</h2>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: white;
    margin-bottom: 15px;
}

.icone {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background-color: #fff7ef;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
}

.icone img {
    width: 36px;
}

.informacoes {
    flex: 1;
}

.informacoes h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #3d2215;
    margin: 0;
}

.informacoes p {
    color: #555;
    margin-top: 5px;
}

.data {
    font-size: 14px;
    color: #888
}

.media {
    text-align: center;
}

.media span {
    font-size: 14px;
    color: #666;
}

.media h2 {
    margin-top: 5px;
    color: #2d6b2d;
    font-size: 34px;
    font-weight: bold;
}

@media(max-width:768px) {

    .coffee-card {
        flex-direction: column;
        text-align: center;
    }

    .icone {
        margin: 0 0 15px 0;
    }

    .media {
        margin-top: 15px;
    }
}
</style>