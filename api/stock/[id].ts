import { NowRequest, NowResponse } from '@vercel/node';
import { stock } from '../pre-dados';

// [id].ts simula um Route Params
export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    const productStock = stock.find(product => product.id === Number(id));

    return response.status(200).json(productStock);

}
