import { NowRequest, NowResponse } from '@vercel/node';
import { products } from '../pre-dados';

// [id].ts simula um route params
export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    const product = products.find(product => product.id === Number(id));

    return response.status(200).json(product);
}
