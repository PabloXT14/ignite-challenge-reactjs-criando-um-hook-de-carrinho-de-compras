import { NowRequest, NowResponse } from '@vercel/node';

const products = [
    {
        "id": 1,
        "title": "Air Jordan",
        "price": 179.9,
        "image": "https://artwalk.vteximg.com.br/arquivos/ids/240684/55508-8-063-1.jpg?v=637726807453170000"
    },
    {
        "id": 2,
        "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        "price": 139.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
        "id": 3,
        "title": "Tênis Adidas Duramo Lite 2.0",
        "price": 219.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
        "id": 5,
        "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        "price": 139.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
        "id": 6,
        "title": "Tênis Adidas Duramo Lite 2.0",
        "price": 219.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
        "id": 4,
        "title": "Tênis de Caminhada Leve Confortável",
        "price": 179.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    }
]

// [id].ts simula um route params
export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    const product = products.find(product => product.id === Number(id));

    return response.status(200).json(product);
}
