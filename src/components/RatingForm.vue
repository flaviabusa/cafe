<script setup>
import { reactive, computed } from "vue";
import { coffees } from "@/data/coffees";

const form = reactive({
    nome: "",
    produtor: "",
    aroma: 0,
    sabor: 0,
    acidez: 0,
    corpo: 0,
    finalizacao: 0,
    observacoes: "",
});

const media = computed(() => {
    return (
        (
            Number(form.aroma) +
            Number(form.sabor) +
            Number(form.acidez) +
            Number(form.corpo) +
            Number(form.finalizacao)
        ) / 5
    ).toFixed(1);
});

function salvarAvaliacao() {

    // Validação dos campos obrigatórios
    if (
        form.nome.trim() === "" ||
        form.produtor.trim() === "" ||
        form.aroma === 0 ||
        form.sabor === 0 ||
        form.acidez === 0 ||
        form.corpo === 0 ||
        form.finalizacao === 0
    ) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    // Validação das notas
    if (
        form.aroma < 0 || form.aroma > 10 ||
        form.sabor < 0 || form.sabor > 10 ||
        form.acidez < 0 || form.acidez > 10 ||
        form.corpo < 0 || form.corpo > 10 ||
        form.finalizacao < 0 || form.finalizacao > 10
    ) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    const cafe = coffees.value.find(
        coffee => coffee.nome.toLowerCase() === form.nome.toLowerCase()
    );

    if (!cafe) {
        alert("Café não encontrado!");
        return;
    }

    cafe.produtor = form.produtor;
    cafe.aroma = Number(form.aroma);
    cafe.sabor = Number(form.sabor);
    cafe.acidez = Number(form.acidez);
    cafe.corpo = Number(form.corpo);
    cafe.finalizacao = Number(form.finalizacao);
    cafe.observacoes = form.observacoes;

    cafe.media =
        (
            cafe.aroma +
            cafe.sabor +
            cafe.acidez +
            cafe.corpo +
            cafe.finalizacao
        ) / 5;

    alert("Avaliação salva com sucesso!");

    limparFormulario();
}

function limparFormulario() {
    form.nome = "";
    form.produtor = "";
    form.aroma = 0;
    form.sabor = 0;
    form.acidez = 0;
    form.corpo = 0;
    form.finalizacao = 0;
    form.observacoes = "";
}
</script>

<template>
    <form class="rating-form" @submit.prevent="salvarAvaliacao">

        <h2>Nova Avaliação</h2>

        <div class="campo">
            <label>Nome do Café</label>
            <input type="text" placeholder="Ex.: Bourbon Amarelo" v-model="form.nome" />
        </div>

        <div class="campo">
            <label>Produtor</label>
            <input type="text" placeholder="Ex.: Fazenda Boa Vista" v-model="form.produtor" />
        </div>

        <div class="notas">

            <div class="campo-nota">
                <label>Aroma</label>
                <input type="number" min="0" max="10"  v-model="form.aroma" />
            </div>

            <div class="campo-nota">
                <label>Sabor</label>
                <input type="number" min="0" max="10"  v-model="form.sabor" />
            </div>

            <div class="campo-nota">
                <label>Acidez</label>
                <input type="number" min="0" max="10" v-model="form.acidez" />
            </div>

            <div class="campo-nota">
                <label>Corpo</label>
                <input type="number" min="0" max="10" v-model="form.corpo" />
            </div>

            <div class="campo-nota">
                <label>Finalização</label>
                <input type="number" min="0" max="10" v-model="form.finalizacao" />
            </div>

        </div>

        <div class="campo">
            <label>Observações</label>

            <textarea rows="4" placeholder="Digite alguma observação..." v-model="form.observacoes"></textarea>
        </div>

        <div class="media">
            <strong>Média SCA:</strong>
            <span>{{ media }}</span>
        </div>

        <div class="botoes">

            <button type="button" class="limpar" @click="limparFormulario">
                Limpar
            </button>

            <button type="submit" class="salvar">
                Salvar Avaliação
            </button>

        </div>

    </form>
</template>

<style scoped>
.rating-form {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}

h2 {
    margin-top: 0;
    color: #320d0d;
}

.campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
}

label {
    font-weight: 600;
    margin-bottom: 6px;
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

.notas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.campo-nota {
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

.media span {
    font-size: 24px;
    color: #320d0d;
    font-weight: bold;
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

    .rating-form {
        padding: 20px;
    }
    .notas {
        grid-template-columns: repeat(2, 1fr);
    }
    .botoes {
        flex-direction: column;
    }
    button {
        width: 100%;
    }
}
</style>