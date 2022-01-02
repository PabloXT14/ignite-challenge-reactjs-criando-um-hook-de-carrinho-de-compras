import { NowRequest, NowResponse } from '@vercel/node';
import { stock } from './pre-dados';

export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    if (id) {
        const productStock = stock.find(product => product.id === Number(id));
        return response.status(200).json(productStock);
    }


    return response.status(200).json(stock);
}
