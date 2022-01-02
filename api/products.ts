import { NowRequest, NowResponse } from '@vercel/node';
import { products } from './pre-dados';


export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    if (id) {
        const product = products.find(product => product.id === Number(id));
        return response.status(200).json(product);
    }

    return response.status(200).json(products);
}
