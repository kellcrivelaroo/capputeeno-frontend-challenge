# Capputeeno
Olá! Esse repositório contém minha solução para o desafio aberto [Frontend Challenge](https://github.com/Rocketseat/frontend-challenge) da [@rocketseat](https://github.com/Rocketseat)
Trata-se de uma loja virtual fictícia (Capputeeno) que incorpora uma ampla gama de funcionalidades encontradas em e-commerces da atualidade.

Embora o desafio sugerisse a utilização do Styled Components, decidi não utilizá-lo, por conta da incompatibilidades com a funcionalidade de Server Components do Next.js 13.
Ao invés disso, escolhi utilizar o Tailwind CSS, a biblioteca de estilização recomendada pela própria documentação do Next.js

Funcionalidades desenvolvidas:
- [x] Catálogo de produtos com paginação
- [x] Filtragem produtos por categoria
- [x] Busca por nome do produto
- [x] Adicionar e remover produtos do carrinho
- [x] Finalizar compra
- [x] Deploy na Vercel

Tarefas pendendentes:
- [ ] Implementação do cache do Next.js
- [ ] Testes unitários
- [ ] Refatoração do método de busca do Search Bar

Desafios encontrados durante o desenvolvimento:

- Como este foi meu primeiro envolvimento com o GraphQL, encontrei alguns desafios:
  - Adquirir conhecimento sobre a ferramenta e aprender a utilizá-la, juntamente com as bibliotecas necessárias.
  - Implementer um banco de dados GraphQL para servir como base para a loja virtual. Após realizar pesquisas, optei pela plataforma Hasura e consegui configurar e hospedar o banco de dados.
  


Segue a descrição do desafio, contida no próprio repositório do desafio:

![Protótipo](https://storage.googleapis.com/xesque-dev/challenge-images/prototipo.png?42)

O desafio será implementar um e-commerce para venda de canecas e camisetas que deverá ter as seguintes funcionalidades:
- [ ] Catálogo de produtos com paginação
- [ ] Filtragem produtos por categoria
- [ ] Busca por nome do produto
- [ ] Adicionar e remover produtos do carrinho
- [ ] Finalizar compra

## 📋 Instruções

Chegou a hora de colocar a mão na massa!

- Siga [esse protótipo](https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?node-id=680%3A6449)
- Utilize Next.js e Typescript
- Faça a estilização com styled-components
- Utilize o local storage para gerenciar o carrinho
- Por favor, inclua no README as instruções de instalação do projeto
- Sinta-se livre para incluir quaisquer observações
- Consuma nossa **API GraphQL** rodando o comando `yarn start` na pasta `api`

## ✔️ Critérios de Avaliação

Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

- Gerenciamento de estado
- Componentização
- Responsividade
- Preocupação com usabilidade
- Preocupação com acessibilidade
- Testes e2e
- Padrões de código
- Padrão de commits (_Conventional_)

## 😎 Seria legal
- Fazer deploy na vercel ou em outro local de sua preferência e disponibilizar um link de visualização, se necessário utilize esse servidor para a API GraphQL:  https://rocketseat-frontend-challenge.herokuapp.com/
- Testes unitários
- Utilização de cache do Next.js
