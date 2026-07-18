<script setup>
defineProps(['coffee'])
</script>

<template>

<div class="coffee-card">

    <div class="icone">
        <img src="/grao-de-cafe.png" alt="Café">
    </div>

    <div class="informacoes">
        <h3>{{ coffee.nome }}</h3>

        <p>
            <strong>Produtor:</strong>
            {{ coffee.produtor }}
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

.coffee-card{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px;
    border:1px solid #ddd;
    border-radius:12px;
    background:white;
    margin-bottom:15px;
}

.icone{
    width:70px;
    height:70px;
    border-radius:10px;
    background:#faf7f4;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:18px;
}

.icone img{
    width:36px;
}

.informacoes{
    flex:1;
}

.informacoes h3{
    margin:0;
    color:#3d2215;
}

.informacoes p{
    margin:5px 0;
    color:#555;
}

.data{
    font-size:14px;
    color:#888
}

.media{
    text-align:center;
}

.media span{
    font-size:14px;
    color:#666;
}

.media h2{
    margin-top:5px;
    color:#2d6b2d;
    font-size:34px;
}

@media(max-width:768px){

.coffee-card{
    flex-direction:column;
    text-align:center;
}

.icone{
    margin:0 0 15px 0;
}

.media{
    margin-top:15px;
}
}
</style>