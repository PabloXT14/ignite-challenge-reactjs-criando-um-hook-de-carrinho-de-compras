# Projeto Carrinho de Compras
Esta é uma aplicação ReactJS que simula um carrinho de compras básico (no caso uma lojinha de tênis), onde se tem a página principal de seleção dos produtos e uma outra que representa o carrinho de compras do usuário (obs: o botão de finalizar compra é meramente ilustrativo).

Os objetivos principais foram treinar e aprimorar funcionalidades do ReactJS (`useState`, `useContext`, ...), a utilização de APIs e Serveless Functions(da vercel).

Contudo, este é um projeto desenvolvido como Desafio do curso Ignite ReactJS da [Rocketseat](https://www.rocketseat.com.br/).

## 📷 Demonstration
<img src="./src/assets//Demonstration-Images/Demonstration01-Carrinho-De-Compras-FullPage.gif" alt="Gif de Demostração Projeto em FullPage">
<br/>
<img src="./src/assets//Demonstration-Images/Demonstration02-Carrinho-De-Compras-Mobile.gif" alt="Gif de Demostração">

## 🏍 Deploy
* Para executar o deploy do projeto basta acessar: https://ignite-challenge-reactjs-criando-um-hook-de-carrinho-de-compras.vercel.app/
* OBS: a página está responsiva, o conteúdo está adaptável para PC/Computador e Mobile (entre outros tamanhos de tela).

## 🚀 Technologies
✔ ReactJS
<br>
✔ TypeScript
<br> 
✔ [React Toastify](https://fkhadra.github.io/react-toastify/introduction) (para os popups de mensagem no topo da tela)
<br>
✔ [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt) (para o efeito 3D dos cards)
<br>
✔ Library Axios (para as requisições HTTP)
<br>
✔ SCSS (library Sass for CSS)
<br>
✔ [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions#) (da vercel - para simular um servidor)
<br>
✔ IDE: VS Code

## ⚙ Settings
* Para executar o projeto você deve baixar os arquivos ou dar um `git clone` do repositório.
* Após baixar rode o comando `yarn` no terminal dentro do diretório do projeto para baixar todas as dependências.
* Depois de baixar as dependências siga os seguintes passos para execução do projeto:
    - `yarn server`: para executar/iniciar o server da nossa **Fake API com JSON Server**.
        ``` 
        OBS: para que as requisições pelo axios para este servidor fake funcionarem você vai precisar ir no diretório <src/services> no arquivo <api.ts> e alterar o campo <baseURL> para o seguinte valor <baseURL: 'http://localhost:333'>
        ``` 
    - `yarn start`: para executar a aplicação React no browser. 


