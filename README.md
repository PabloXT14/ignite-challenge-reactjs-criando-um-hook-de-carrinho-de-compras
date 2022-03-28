# Projeto Carrinho de Compras
* Esta é uma aplicação ReactJS que simula um carrinho de compras básico (no caso uma lojinha de tênis), onde se tem a página principal de seleção dos produtos e uma outra que representa o carrinho de compras do usuário (obs: o botão de finalizar compra é meramente ilustrativo).

* Os objetivos principais foram treinar e aprimorar funcionalidades do ReactJS (`useState`, `useContext`, ...), a utilização de APIs e Serveless Functions(da vercel).
* Contudo, este é um projeto desenvolvido como Desafio do curso Ignite ReactJS da [Rocketseat](https://www.rocketseat.com.br/).
* Caso goste do projeto marque a estrelinha⭐ e compartilhe para me ajudar 👍, e me siga para ver outros projetos meus.

## 📷 Demonstration
<img src="./src/assets//Demonstration-Images/Demonstration01-Carrinho-De-Compras-FullPage.gif" alt="Gif de Demostração Projeto em FullPage">
<br/>
<img src="./src/assets//Demonstration-Images/Demonstration02-Carrinho-De-Compras-Mobile.gif" alt="Gif de Demostração">

## 💻 Deploy
* Para executar o deploy do projeto basta acessar: [Link](https://ignite-challenge-reactjs-criando-um-hook-de-carrinho-de-compras.vercel.app/)
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
✔ localStorage (para salvar o state do carrinho)
<br>
✔ IDE: VS Code

## ⚙ Settings
* Segue os comandos para baixar e executar o projeto na sua máquina:
    - `git clone` + `URL do Projeto`: clonar este repositório.
    - `cd PastaDoProjeto`: acessa a pasta do projeto no terminal.
    - `yarn`: para baixar as dependências do projeto.
    - `yarn server`: 
        - Para executar o server da nossa **Fake API com JSON Server**.
        - ATENÇÃO:
        ```
            Para que as requisições pelo axios para este servidor fake funcionarem você vai precisar: 
            * Ir no diretório <src/services>
            * No arquivo <api.ts>
            * E alterar o campo <baseURL> para o seguinte valor <baseURL: 'http://localhost:3333'>
        ``` 
    - `yarn start`: 
        - Executa a aplicação React no seu navegador. 
        - Abra `http://localhost:3000` para ver o projeto rodando no seu navegador.
        - A página será recarregada se você fizer edições no código, e se tiver algum erro será mostrado no console.
    - `yarn build`: Compila a aplicação para a produção na pasta build

## 📝 License
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✍ Author
<img alt="PabloXT14" title="PabloXT14" src="https://avatars.githubusercontent.com/u/71723595?s=400&u=f7a1ec0c2e1f7cd1acf79f61043dbc75b1079de6&v=4" width="100">
<p>
    Made with 💜 by PabloXT14
</p>
<p align="left">
    <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">
        <img align="center" src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Pablo Alan" />
    </a>
    <a href="mailto:pabloxt14@gmail.com" target="_blank">
        <img align="center" src="https://img.shields.io/badge/Gmail-FF0000?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Pablo Alan" />
    </a>
</p>
