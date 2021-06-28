import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .input-cep {
      display: flex;
      flex-direction: column;

      input {
        border-radius: 0.25rem;
        border: 1px solid #079927;
        height: 1.7rem;
        padding: 0 0.4rem;
      }
    }

    .button {
      background: #079927;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      margin-top: 0.2rem;

      &.small-button {
        padding: 8px 14px;
      }

      &:hover {
        background: ${darken(0.06, '#079927')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  max-width: 1400px;
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #079927;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#079927')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#079927')};
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 720px) {
    font-size: 12px;
    thead th {
      color: #999;
      text-align: left;
      padding: 12px;
    }

    tbody td {
      padding: 0px;
      border-bottom: 1px solid #eee;
    }

    img {
      height: 60px;
    }

    strong {
      color: #333;
      display: block;
    }

    span {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  span {
    color: #999;
    font-weight: bold;
  }

  .frete {
    strong {
      font-size: 16px;
      margin-left: 5px;
    }
  }

  .total {
    strong {
      font-size: 20px;
      margin-left: 5px;
    }
  }
`;
