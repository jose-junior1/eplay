# 🎮 EPLAY - A sua loja de games

Este repositório contém o código-fonte do meu projeto feito no curso da **EBAC**, desenvolvido com **React**, **TypeScript**, **styled-components**, entre outras ferramentas. O objetivo é representar o fluxo de um e-commerce, onde o usuário visualiza os jogos disponíveis, acessam suas respectivas páginas contendo seus detalhes e os adicionam no carrinho.

Para demonstrar o fluxo temos a seção de checkout, onde o usuário digita os dados de cobrança, a forma de pagamento, e, se estiver tudo ok finaliza o pedido com um orderId único.

🔗 [Acesse o e-commerce online](https://eplaygames.vercel.app/)

---

## ✨ Funcionalidades

- Página **Home** com destaque jogos em promoção e em breve.
- Página do **Game** mostrando detalhes do jogo selecionado.
- Aside para o carrinho de compras.
- Página de checkout para pagamento e confirmação de pedido.
- Layout **responsivo** para desktop e mobile.
- Estilização com **styled-components**.
- Integração com API externa.
- Código limpo, modularizado e reutilizável.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Styled-components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- Redux
- RTK Query
- Formik
- Yup
- React Spinners

---

## 📁 Estrutura do Projeto

```bash
efood/
├── public/
├── src/
│   ├── assets/              # Logos, imagens e arquivo de definição de tipos de imagem
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/               # Páginas Home e Restaurant
│   ├── services/            # Requisição da API com RTK Query
│   ├── store/               # Store contendo os reducers e middlewares
│   │    └── reducers/        # Reducer do carrinho (adicionar, remover, limpar fluxo, etc.)
│   ├── styles/              # Estilos globais e arquivo de cores
│   ├── utils/               # Função de conversão de moeda para BRL e função para pegar o valor total do carrinho
│   │── App.tsx              # Definição do app
│   │── index.tsx            # Ponto de entrada do app
│   │── routes.tsx           # Rotas do React Router
│   └── types.d.ts           # Arquivos de declaração de tipos
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .hintrc
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

---

## 📌 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/jose-junior1/eplay
cd eplay
```
2. Instale as dependências:

```
    npm install
```

3. Inicie o servidor de desenvolvimento:

```
    npm run start
```

4. Acesse o navegador:

```
    http://localhost:3000
```

---



## 🚀 Deploy
Este projeto está hospedado gratuitamente via Vercel:

🌍 https://eplaygames.vercel.app/

---

> Desenvolvido com 💙 por José Junior
