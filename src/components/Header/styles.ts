import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  .logo-container {
    a {
      color: #fff;
      transition: opacity 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-weight: 700;

      svg {
        color: #079927;
        margin-right: 0.4rem;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  .cart-icon {
    width: 32px;
    height: 32px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
