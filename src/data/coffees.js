import { ref } from 'vue'

export const coffees = ref([
  {
    id: 1,
    nome: "Bourbon Amarelo",
    produtor: "Fazenda Boa Vista",
    aroma: 9,
    sabor: 9,
    acidez: 9,
    corpo: 10,
    finalizacao: 9.5,
    media: 9.3,
    observacoes: "Café equilibrado, com excelente doçura e aroma marcante.",
    data: "18/07/2026",
    avaliador: "Ana Beatriz"
  },
  {
    id: 2,
    nome: "Catuaí Vermelho",
    produtor: "Café do Vale",
    aroma: 8.5,
    sabor: 9,
    acidez: 8.5,
    corpo: 8.5,
    finalizacao: 9,
    media: 8.7,
    observacoes: "Notas cítricas e finalização agradável.",
    data: "18/07/2026",
    avaliador: "Arthur"
  },
  {
    id: 3,
    nome: "Arara",
    produtor: "Sítio das Flores",
    aroma: 8,
    sabor: 8,
    acidez: 8,
    corpo: 8.5,
    finalizacao: 8,
    media: 8.1,
    observacoes: "Bom equilíbrio entre corpo e acidez.",
    data: "18/07/2026",
    avaliador: "Clara"
  },
  {
    id: 4,
    nome: "Mundo Novo",
    produtor: "Santa Clara",
    aroma: 7,
    sabor: 7,
    acidez: 7.5,
    corpo: 7.5,
    finalizacao: 8,
    media: 7.4,
    observacoes: "Café suave, com finalização prolongada.",
    data: "18/07/2026",
    avaliador: "Matheus"
  }
])
