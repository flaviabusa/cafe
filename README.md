# Coffee Quality Challenge

## Identificação

**Aluno:** Flavia Busarello Corrêa

**Turma:** 2info 2

**Disciplina:** Desenvolvimento Web

---

## Sobre o Projeto

O Coffee Quality Challenge é uma aplicação desenvolvida em Vue.js para realizar avaliações de cafés especiais.
O sistema permite cadastrar avaliações, calcular automaticamente a média das notas, visualizar um ranking dos cafés e consultar os detalhes de cada café avaliado.

---

## Prints das Telas

### Home

<img width="572" height="637" alt="pagHome" src="https://github.com/user-attachments/assets/47542fca-2c22-4230-994a-ba22fc2270b2" />

### Avaliações

<img width="570" height="450" alt="avaliacoes" src="https://github.com/user-attachments/assets/a2e6ed4b-fdc4-4a11-a7f5-fb32c6e4b661" />

### Ranking

<img width="571" height="502" alt="ranking" src="https://github.com/user-attachments/assets/20ec1079-3032-4dc0-a1c8-06272d08b7f0" />

### Detalhes Café

<img width="567" height="548" alt="detalhesCafe" src="https://github.com/user-attachments/assets/d8651d83-361c-4797-8076-aafaabde169d" />


---

## Conceitos Vue.js Utilizados

- **Templates:** utilizados para montar a estrutura de todas as páginas da aplicação.

- **Interpolação (`{{ }}`):** utilizada para exibir informações como nome do café, produtor, média e quantidade de cafés.

- **v-for:** utilizado para percorrer a lista de cafés e exibi-los na página de Avaliações e no Ranking.

- **v-if e v-else:** utilizados para exibir mensagens condicionais, como na página de Detalhes quando um café é encontrado ou não.

- **Componentes:** foram criados os componentes `CoffeeCard`, `RatingForm` e `LeaderboardTable` para reutilizar código em diferentes páginas.

- **Props:** utilizadas para enviar os dados de cada café para o componente `CoffeeCard`.

- **Reatividade (`ref`):** utilizada para armazenar a lista de cafés e atualizar automaticamente a interface quando uma avaliação é salva.

- **computed():** utilizado para calcular a média das avaliações e exibir informações da página Home, como quantidade de cafés avaliados e melhor média.

- **Vue Router:** utilizado para navegar entre as páginas Home, Avaliações, Ranking, Detalhes do Café e Página 404.
