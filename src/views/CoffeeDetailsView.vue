<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { coffees } from '@/data/coffees'

const route = useRoute()
const coffee = coffees.value.find(coffee => coffee.id == route.params.id)

</script>

<template>
    <main>
        <div v-if="coffee" class="detalhes">

            <h1>{{ coffee.nome }}</h1>

            <p class="produtor">
                <strong>Produtor:</strong> {{ coffee.produtor }}
            </p>

            <div class="media">
                <h2>Média Final</h2>

                <span>{{ coffee.media }}</span>
            </div>

            <div class="notas">

                <div class="nota">
                    <span>Aroma</span>
                    <strong>{{ coffee.aroma }}</strong>
                </div>

                <div class="nota">
                    <span>Sabor</span>
                    <strong>{{ coffee.sabor }}</strong>
                </div>

                <div class="nota">
                    <span>Acidez</span>
                    <strong>{{ coffee.acidez }}</strong>
                </div>

                <div class="nota">
                    <span>Corpo</span>
                    <strong>{{ coffee.corpo }}</strong>
                </div>

                <div class="nota">
                    <span>Finalização</span>
                    <strong>{{ coffee.finalizacao }}</strong>
                </div>
            </div>

            <div class="informacoes">

                <div>
                    <h3>Observações</h3>
                    <p>{{ coffee.observacoes }}</p>
                </div>

                <div>
                    <h3>Data da Avaliação</h3>
                    <p>{{ coffee.data }}</p>
                </div>

                <div>
                    <h3>Avaliador</h3>
                    <p>{{ coffee.avaliador }}</p>
                </div>
            </div>
            <div class="botao-voltar">
                <RouterLink to="/ranking" class="voltar">
                    Voltar ao Ranking
                </RouterLink>
            </div>

        </div>

        <div v-else class="erro">
            <h1>Café não encontrado</h1>

            <p>
                O café solicitado não existe ou foi removido.
            </p>

            <RouterLink to="/ranking">
                Voltar ao Ranking
            </RouterLink>
        </div>
    </main>

</template>

<style scoped>
.detalhes {
    max-width: 900px;
    margin: 30px auto;
    background: white;
    border: 1px solid #ececec;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
    padding: 35px;
}


h1 {
    margin: 0;
    color: #320d0d;
    font-size: 2rem;
}

.produtor {
    margin-top: 10px;
    color: #666;
    font-size: 1.05rem;
}

.media {
    margin: 30px 0;
    padding: 20px;
    background: #f8f4ef;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.media h2 {
    margin: 0;
    color: #320d0d;
}

.media span {
    font-size: 2rem;
    font-weight: bold;
    color: #320d0d;
}

.notas {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 30px;
}

.nota {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border: 1px solid #ececec;
    border-radius: 10px;
}

.nota span {
    color: #666;
}

.nota strong {
    color: #320d0d;
}

.informacoes {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.informacoes h3 {
    margin-bottom: 8px;
    color: #320d0d;
}

.informacoes p {
    margin: 0;
    color: #666;
    line-height: 1.6;
}

.botao-voltar {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.voltar {
    padding: 10px 40px;
    background-color: #320d0dc6;
    color: white;
    text-decoration: none;
    border-radius: 10px;
}

.voltar:hover{
    background-color: #2a0b0b;
}

.erro {
    max-width: 600px;
    margin: 80px auto;
    padding: 40px;
    background: white;
    border: 1px solid #ececec;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
    text-align: center;
}

.erro h1 {
    margin-bottom: 15px;
}

.erro p {
    color: #666;
    margin-bottom: 30px;
}

.erro a {
    display: inline-block;
    background: #320d0d;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
}

.erro a:hover {
    background: #2a0b0b;
}

/* Tablet */

@media (max-width: 992px) {
    .detalhes {
        margin: 25px;
        padding: 25px;
    }
}

/* Celular */
@media (max-width: 768px) {

    .detalhes {
        margin: 15px;
        padding: 20px;
    }

    h1 {
        font-size: 1.7rem;
    }

    .media {
        flex-direction: column;
        gap: 12px;
        text-align: center;
    }

    .erro {
        margin: 30px 15px;
        padding: 25px;
    }

    .erro a {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>