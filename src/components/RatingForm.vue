<script setup>
import { ref, computed } from 'vue'
import { coffees } from '@/data/coffees'

const nome = ref('')
const produtor = ref('')
const aroma = ref(0)
const sabor = ref(0)
const acidez = ref(0)
const corpo = ref(0)
const finalizacao = ref(0)
const observacoes = ref('')
const avaliador = ref('')

const erro = ref('')

const media = computed(() => {
    return (
        Number(aroma.value) +
        Number(sabor.value) +
        Number(acidez.value) +
        Number(corpo.value) +
        Number(finalizacao.value)
    ) / 5
})

function limparFormulario() {
    nome.value = ''
    produtor.value = ''
    aroma.value = 0
    sabor.value = 0
    acidez.value = 0
    corpo.value = 0
    finalizacao.value = 0
    observacoes.value = ''
    avaliador.value = ''
    erro.value = ''
}

function salvarAvaliacao() {

    if (nome.value == '' || produtor.value == '' || avaliador.value == '') {
        erro.value = 'Preencha todos os campos obrigatórios.'
        return
    }

    const cafeExistente = coffees.value.find(coffee => coffee.nome === nome.value)

    if (cafeExistente) {
        cafeExistente.produtor = produtor.value
        cafeExistente.aroma = Number(aroma.value)
        cafeExistente.sabor = Number(sabor.value)
        cafeExistente.acidez = Number(acidez.value)
        cafeExistente.corpo = Number(corpo.value)
        cafeExistente.finalizacao = Number(finalizacao.value)
        cafeExistente.media = Number(media.value.toFixed(1))
        cafeExistente.observacoes = observacoes.value
        cafeExistente.avaliador = avaliador.value
        cafeExistente.data = new Date().toLocaleDateString('pt-BR')
    } 
    else {
        coffees.value.push({
            id: coffees.value.length + 1,
            nome: nome.value,
            produtor: produtor.value,
            aroma: Number(aroma.value),
            sabor: Number(sabor.value),
            acidez: Number(acidez.value),
            corpo: Number(corpo.value),
            finalizacao: Number(finalizacao.value),
            media: Number(media.value.toFixed(1)),
            observacoes: observacoes.value,
            avaliador: avaliador.value,
            data: new Date().toLocaleDateString('pt-BR')
        })
    }
    limparFormulario()
}
</script>

<template>
    <div class="form-card">

        <h2>Nova Avaliação</h2>
        <p class="subtitulo">
            Cadastre uma nova avaliação de café.
        </p>
        <p v-if="erro" class="erro">
            {{ erro }}
        </p>

        <label>Nome do Café *</label>
        <input type="text" placeholder="Ex.: Bourbon Amarelo" v-model="nome">

        <label>Produtor *</label>
        <input type="text" placeholder="Ex.: Fazenda Boa Vista" v-model="produtor">

        <label>Avaliador *</label>
        <input type="text" placeholder="Seu nome" v-model="avaliador">

        <h3>Notas SCA</h3>
        <div class="grid-notas">
            <div>
                <label>Aroma</label>
                <input type="number" min="0" max="10" v-model="aroma">
            </div>

            <div>
                <label>Sabor</label>
                <input type="number" min="0" max="10"  v-model="sabor">
            </div>

            <div>
                <label>Acidez</label>
                <input type="number" min="0" max="10" v-model="acidez">
            </div>

            <div>
                <label>Corpo</label>
                <input type="number" min="0" max="10" v-model="corpo">
            </div>

            <div>
                <label>Finalização</label>
                <input type="number" min="0" max="10" v-model="finalizacao">
            </div>
        </div>

        <label>Observações</label>
        <textarea rows="4" placeholder="Descreva as características do café..." v-model="observacoes"></textarea>

        <div class="media">
            <p>Média SCA</p>
            <h2>{{ media.toFixed(1) }}</h2>
        </div>

        <div class="botoes">
            <button class="limpar" @click="limparFormulario">
                Limpar
            </button>

            <button class="salvar" @click="salvarAvaliacao">
                Salvar Avaliação
            </button>
        </div>
    </div>
</template>

<style scoped>
.form-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}

h2 {
    margin-top: 0;
    margin-bottom: 5px;
    color: #320d0d;
}

.subtitulo {
    color: #666;
    margin-bottom: 20px;
}

.erro {
    color: red;
    margin-bottom: 15px;
    font-size: 14px;
}

label {
    font-weight: 600;
    margin-bottom: 6px;
    display: block;
    color: #320d0d;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 15px;
    box-sizing: border-box;
}

textarea {
    resize: none;
}

.grid-notas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.grid-notas div {
    display: flex;
    flex-direction: column;
}

.media {
    margin: 20px 0;
    background: #f8f4ef;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.media p {
    margin: 0;
    font-weight: 600;
}

.media h2 {
    margin: 0;
    color: #320d0d;
    font-size: 26px;
}

.botoes {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.salvar {
    background: #320d0dc6;
    color: white;
}

.salvar:hover {
    background: #2a0b0b;
}

.limpar {
    background: #ddd;
}

.limpar:hover {
    background: #c8c8c8;
}

/* Tablet */
@media (max-width: 992px) {
    .grid-notas {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Celular */
@media (max-width: 768px) {
    .form-card {
        padding: 20px;
    }

    .grid-notas {
        grid-template-columns: repeat(2, 1fr);
    }

    .media {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    .botoes {
        flex-direction: column;
    }

    button {
        width: 100%;
    }
}

</style>