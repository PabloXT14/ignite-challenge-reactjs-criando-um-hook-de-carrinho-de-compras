import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    /* ====== Buscando dados do localStorage ===== */
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  /* === Var de Referencia que checa state cart para atualizar valor no localStorage === */
  const prevCartRef = useRef<Product[]>();
  useEffect(() => {
    prevCartRef.current = cart;// valor atual do prevCartRef sempre vai mudar quando o state cart mudar
  })

  // const cartPreviousValue = prevCartRef.current ?? cart;
  const cartPreviousValue = prevCartRef.current ? prevCartRef.current : cart;

  useEffect(() => {
    if (cartPreviousValue !== cart) {
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
    }
  }, [cart, cartPreviousValue])

  /* === Função com lógica de adição de produto no Cart(Carrinho) === */
  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];

      // Checando se produto ja existe no cart
      const productExists = updatedCart.find(product => product.id === productId);

      // Buscando dados do stock de produtos
      const stock = await api.get(`/stock/${productId}`);
      //console.log(stock.data)
      const stockAmount = stock.data.amount;// pegando qtn em stock do produto
      const currentAmount = productExists ? productExists.amount : 0;// pegando qtn do produto que o cliente pegou
      const amount = currentAmount + 1;// nova quantidade de do produto que cliente terá

      // Checando se há quantidade itens suficiente no stock
      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');// library de popap do react com mensagem de erro
        return;
      }

      // Checando se produto já existe ou não no cart para criar um novo ou adicionar mais uma unidade ao já existente
      if (productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`/products/${productId}`);//pegando dados do produto do id informado

        // criando novo produto
        const newProduct = {
          ...product.data,
          amount: 1
        }
        updatedCart.push(newProduct);
      }

      // Atualizando state cart (e salvando no localStorage com o var de referencia)
      setCart(updatedCart);

    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  /* === Função com lógica de remoção de produto/item no Cart === */
  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];

      // Checando se produto existe no cart (findIndex: método para retornar o index de um certo item do array, se não achar retorna -1)
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      // Teste para excluir
      if (productIndex >= 0) {
        // Atualizando state cart (e salvando no localStorage com o var de referencia)
        updatedCart.splice(productIndex, 1);// splice: método para exluir items
        setCart(updatedCart);
      } else {
        throw Error();// forçando erro para cair no catch
      }

    } catch {
      toast.error('Erro na remoção do produto');// popup de erro no react
    }
  };

  /* === Função com lógica de update da quantidade de produto no Cart === */
  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // amount: nova quantidade desejada do produto
      if (amount <= 0) return;

      // Checando se há quantidade do produto suficiente no estoque
      const stock = await api.get(`/stock/${productId}`);
      const stockAmount = stock.data.amount;

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      // Lógica de adição de nova quantidade de produtos no cart
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        // Atualizando state cart (e salvando no localStorage com o var de referencia)
        productExists.amount = amount;
        setCart(updatedCart);
      } else {
        throw Error();
      }

    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
