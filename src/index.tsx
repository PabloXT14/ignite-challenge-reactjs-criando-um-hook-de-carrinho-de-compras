import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createServer, Model } from 'miragejs';

/* Fake Server API (descomente o creareServer se quiser rodar a fake API com MirageJS - assim você só precisará execura <yarn start> que o servidor irá iniciar junto) */
// createServer({

//   // Banco de Dados Fake
//   models: {
//     stock: Model,
//     products: Model
//   },

//   // Função para colocar pre-dados dentro da nossa tabela/db/model
//   seeds(server) {
//     server.db.loadData({
//       stock: [
//         {
//           "id": 1,
//           "amount": 3
//         },
//         {
//           "id": 2,
//           "amount": 5
//         },
//         {
//           "id": 3,
//           "amount": 2
//         },
//         {
//           "id": 4,
//           "amount": 1
//         },
//         {
//           "id": 5,
//           "amount": 5
//         },
//         {
//           "id": 6,
//           "amount": 10
//         }
//       ]
//     });

//     server.db.loadData({
//       products: [
//         {
//           "id": 1,
//           "title": "Tênis de Caminhada Leve Confortável",
//           "price": 179.9,
//           "image": "https://artwalk.vteximg.com.br/arquivos/ids/240684/55508-8-063-1.jpg?v=637726807453170000"
//         },
//         {
//           "id": 2,
//           "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
//           "price": 139.9,
//           "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
//         },
//         {
//           "id": 3,
//           "title": "Tênis Adidas Duramo Lite 2.0",
//           "price": 219.9,
//           "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
//         },
//         {
//           "id": 5,
//           "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
//           "price": 139.9,
//           "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
//         },
//         {
//           "id": 6,
//           "title": "Tênis Adidas Duramo Lite 2.0",
//           "price": 219.9,
//           "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
//         },
//         {
//           "id": 4,
//           "title": "Tênis de Caminhada Leve Confortável",
//           "price": 179.9,
//           "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
//         }
//       ]
//     });
//   },

//   // Rotas 
//   routes() {
//     this.namespace = 'api';

//     // Rota de Estoque
//     this.get('/stock', (schema, request) => {
//       return this.schema.db.stock;
//     });
//     this.get('/stock/:id', (schema, request) => {
//       let id = JSON.parse(request.params.id) - 1;// convertendo para index de array

//       return this.schema.db.stock[id];
//     });


//     // Rota de Produtos
//     this.get('/products', (schema, request) => {
//       return this.schema.db.products;
//     });
//     // Rota retorna produto por id
//     this.get('/products/:id', (schema, request) => {
//       let id = JSON.parse(request.params.id) - 1;// convertendo para index de array

//       return this.schema.db.products[id];
//     });

//   }

// });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
