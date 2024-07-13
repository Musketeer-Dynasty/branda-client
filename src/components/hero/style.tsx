import styled from "styled-components";

export const HeroStyle = styled.main`
  height: 100%;
  display: flex;
  padding: 0rem 4.5rem 0rem 4.5rem;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
  .one,
  .img {
    width: 50%;
  }
  .one {
    display: flex;
    flex-direction: column;
    gap: 1.56rem;
    h1 {
      color: #000;
      font-size: 4rem;
      font-style: normal;
      font-weight: 900;
      line-height: 100%; /* 4rem */
      strong {
        color: #5d5fef;
      }
    }
    p {
      color: #000;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .img {
    img {
      width: 100%;
      height: auto;
    }
  }
  .btn {
    button {
      background: var(--Iris-100, #5d5fef);
      padding: 0.625rem;
      color: #fff;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      height: 50px;
    }
  }
  @media (max-width: 998px) {
    flex-direction: column;
    gap: 1.25rem;
    padding: 0rem 2.5rem 0rem 2.5rem;
    .one,
    .img {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
  padding: 0rem 1rem 0rem 1rem;
  } 
`;
