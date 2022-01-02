import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 1.8rem;
  background: #fff;
  border-radius: .25rem;

  footer {
    margin-top: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: .25rem;
      padding: .75rem 1.25rem;
      font-size: .87rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }

    @media screen and (max-width: 550px) {
      flex-direction: column-reverse;
      gap: 1rem;

      div {
        width: 100%;
        justify-content: space-between;
      }

      button {
        width: 100%;
        font-size: 1rem;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: .75rem;
  }

  tbody td {
    padding: .75rem;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 6.25rem;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 1.15rem;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: .25rem;
      color: #666;
      padding: .37rem;
      width: 3.12rem;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: .37rem;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }

  /* ===== Responsividade da table ===== */
  @media screen and (max-width: 720px) {
    thead {
      display: none;
    }

    tr {
      display: block;
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    td[data-title="PRODUTO"] span {
      display: none;
    }

    td[data-title="PRODUTO"] strong {
      text-align: right;
      margin-left: 30px;
    }

    // Estilo na primeira coluna da linha
    td:first-of-type {
      text-align: center;
      display: block;
      img {
        height: 12rem;
      }
    }

    // Adicionando atributo no content do :before
    td:not(:first-of-type):before {
      content: attr(data-title);
      display: block;
      font-weight: bold;
      color: #999;
    }
  }

`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 1.75rem;
    margin-left: 5px;
  }
`;
