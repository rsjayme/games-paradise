import React, { useState } from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { IsCEP } from '../../util/cepValidation';
import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface ProductFormatted extends Product {
  priceFormatted?: string;
  imageFormated?: string;
}
let cartFormatted: ProductFormatted[];
const freteBase = 15;

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();
  const [shippingPrice, setShippingPrice] = useState(0);
  const [destinationCEP, setDestinationCEP] = useState('');

  cartFormatted = cart.map((product: ProductFormatted) => {
    product.priceFormatted = formatPrice(product.price);
    const oldImg = product.image;
    product.imageFormated = `assets/products/${oldImg}`;
    return product;
  });

  const total = formatPrice(
    cart.reduce((acc, product) => {
      const productTotal = product.amount * product.price;
      acc += productTotal;
      return acc;
    }, 0)
  );

  const totalFrete = cart.reduce((acc, product) => {
    acc += 10 * product.amount;
    console.log(acc);
    return acc;
  }, 0);

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  function handleCalculateShipping(cep: string) {
    if (IsCEP(cep)) {
      if (+totalFrete >= 250) {
        setShippingPrice(0);
      } else {
        console.log(totalFrete);
        setShippingPrice(freteBase + totalFrete);
      }
    } else {
      alert('CEP inválido!');
    }
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        {cartFormatted?.map((product) => (
          <tbody key={product.id}>
            <tr data-testid="product">
              <td>
                <img src={product.imageFormated} alt={product.image} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{formatPrice(product.price * product.amount)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </ProductTable>

      <footer>
        <div className="input-cep">
          <label htmlFor="">CEP:</label>
          <input
            onChange={(e) => setDestinationCEP(e.target.value)}
            type="text"
          />
          <button
            onClick={() => handleCalculateShipping(destinationCEP)}
            className="button small-button"
          >
            Calcular
          </button>
        </div>

        <Total>
          <div className="frete">
            <span>FRETE</span>
            <strong>{formatPrice(shippingPrice)}</strong>
          </div>
          <div className="total">
            <span>TOTAL</span>
            <strong>{total}</strong>
          </div>
          <button className="button big-button">Finalizar pedido</button>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
