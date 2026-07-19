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

function limitarNota(valor) {
    if (valor > 10) return 10
    if (valor < 0) return 0
    return valor
}

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

    erro.value = ""

    if ( nome.value === "" || produtor.value === "" || avaliador.value === "" ) {
        erro.value = "Preencha todos os campos obrigatórios."
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
    <div class="formulario">

        <h2>Nova Avaliação</h2>

        <div class="informacoes">
            <div>
                <label>Nome do Café *</label>
                <input type="text" placeholder="Ex.: Bourbon Amarelo" v-model="nome">
            </div>
            <div>
                <label>Produtor *</label>
                <input type="text" placeholder="Ex.: Fazenda Boa Vista" v-model="produtor">
            </div>
        </div>

        <label>Avaliador *</label>
        <input type="text" v-model="avaliador">

        <h3>Notas SCA (0 a 10)</h3>
        <div class="notas">
            <div>
                <label>Aroma</label>
                <input type="number" min="0" max="10" v-model="aroma" @input="aroma = limitarNota(Number(aroma))">
            </div>

            <div>
                <label>Sabor</label>
                <input type="number" min="0" max="10" v-model="sabor" @input="sabor = limitarNota(Number(sabor))">
            </div>

            <div>
                <label>Acidez</label>
                <input type="number" min="0" max="10" v-model="acidez" @input="acidez = limitarNota(Number(acidez))">
            </div>

            <div>
                <label>Corpo</label>
                <input type="number" min="0" max="10" v-model="corpo" @input="corpo = limitarNota(Number(corpo))">
            </div>

            <div>
                <label>Finalização</label>
                <input type="number" min="0" max="10" v-model="finalizacao"
                    @input="finalizacao = limitarNota(Number(finalizacao))">
            </div>
        </div>

        <label>Observações</label>
        <textarea rows="4" placeholder="Descreva as características do café..." v-model="observacoes"></textarea>

        <div class="media">
            <p>Média SCA</p>
            <h2>{{ media.toFixed(1) }}</h2>
        </div>

        <p v-if="erro" class="erro">
            {{ erro }}
        </p>

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
.formulario {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}

h2 {
    margin-top: 0;
    margin-bottom: 25px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #320d0d;
}

label {
    font-weight: 600;
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

.informacoes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 15px;
}

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #320d0d;
    margin: 25px 0 0 0;
}

.notas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.notas div {
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

.erro {
    color: red;
    margin: 20px 0 20px 0;
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
    .notas {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Celular */
@media (max-width: 768px) {
    .formulario {
        padding: 20px;
    }

    .informacoes {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .notas {
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