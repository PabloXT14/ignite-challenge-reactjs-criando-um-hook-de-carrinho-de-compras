import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 19rem);
  place-content: center;
  grid-gap: 20px;
  list-style: none;

  .parallax-effect {
    transform-style: preserve-3d;// it's to paralax effect
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: .25rem;
    padding: 20px;

    img {
      align-self: center;
      width: 100%;
    }

    > strong {
      font-size: 1rem;
      line-height: 1.25rem;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: .25rem;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: .75rem;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        font-size: .87rem;/*14px*/
      }
    }
  }
`;
