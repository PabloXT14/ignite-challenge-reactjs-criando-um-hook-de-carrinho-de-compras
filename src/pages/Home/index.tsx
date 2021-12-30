import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  /* Variável para manter a quantidade de cada produto por id */
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }// return []
    newSumAmount[product.id] = product.amount;// criando campo com id do produto e salvando quantidade dele no campo id

    return newSumAmount;
  }, {} as CartItemsAmount)



  useEffect(() => {
    // Buscar produtos na API Fake (e formatando valor de price)
    async function loadProducts() {
      const response = await api.get<Product[]>('/products');

      // formatando valor de price (formatPrice = Intl.NumberFormat)
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

      setProducts(data);// adicionando no state o cart com preco formatado
    }

    loadProducts();
    //console.log(products);
  }, []);

  // Função que vai lidar com a adição de novo produto no cart
  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <ProductList>
      {/* Fazendo carregamento dos produtos de forma dinamica */}
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            data-testid="add-product-button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
              {cartItemsAmount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      )
      )}
    </ProductList>
  );
};

export default Home;
