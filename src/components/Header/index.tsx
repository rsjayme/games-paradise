import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';
import cartIcon from '../../assets/images/cart-icon.svg';

import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.reduce((acc, product) => {
    acc += 1;
    return acc;
  }, 0);

  return (
    <Container>
      <div className="logo-container">
        <Link to="/">
          <FaGamepad size={60} />
          Games Paradise
        </Link>
      </div>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <img className="cart-icon" src={cartIcon} alt="Carrinho" />
      </Cart>
    </Container>
  );
};

export default Header;
