import { createContext, ReactNode, useContext, useState } from 'react';
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

  /* === Função com lógica de adição de produto no Cart(Carrinho) === */
  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];

      // Checando se produto ja existe no cart
      const productExists = updatedCart.find(product => product.id === productId);

      // Buscando dados do stock de produtos
      const stock = await api.get(`/stock/${productId}`);

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

      // Atualizando state cart e salvando no localStorage
      setCart(updatedCart);
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));

    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // TODO
    } catch {
      // TODO
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
