import { NowRequest, NowResponse } from '@vercel/node';

/* 
    - Em Serverless Function cada rota é um arquivo .js/.ts dentro da pasta "api" no diretório rais do seu projeto.
    - Para tipar a função serveless para ela ser compativel com a vercel instale: 
        yarn add vercel -D
    - Comando de execução do servidor serverless da vercel em ambiente dev e prod
        * vercel dev
        * vercel deploy --prod
*/

// Criado função serveless (semelhante a uma rota no exprsss)
export default (request: NowRequest, response: NowResponse) => {
    const { email } = request.body;

    return response.json({ email: email });
}