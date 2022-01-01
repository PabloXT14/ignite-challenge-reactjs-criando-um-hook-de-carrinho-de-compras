import { NowRequest, NowResponse } from '@vercel/node';

const stock = [
    {
        "id": 1,
        "amount": 3
    },
    {
        "id": 2,
        "amount": 5
    },
    {
        "id": 3,
        "amount": 2
    },
    {
        "id": 4,
        "amount": 1
    },
    {
        "id": 5,
        "amount": 5
    },
    {
        "id": 6,
        "amount": 10
    }
]


export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    if (id) {
        const productStock = stock.find(product => product.id === Number(id));
        return response.status(200).json(productStock);
    }


    return response.status(200).json(stock);
}
