import styled from "styled-components";

export const HomeStyles = styled.div`
  margin-top: 5%;
  padding: 0rem 4.5rem 0rem 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .top {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    h3 {
      color: #000;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .other {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      button {
        background: transparent;
        display: flex;
        align-items: center;
        height: 40px;
        min-width: 120px;
        padding: 0.625rem;
        padding: 0rem 1rem 0rem 1rem;
        gap: 0.5rem;
        border: 1px solid #5d5fef;
        p {
          color: var(--Iris-100, #5d5fef);
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          white-space: nowrap;
        }
      }
    }
  }
  .inp {
    position: relative;
    width: 100%;
    input {
      height: 40px;
      padding: 0.625rem;
      background: #f5f5f5;
      border: 1px solid #007BFF; 
    }
    .abs {
      position: absolute;
      top: 100%;
      margin-top: 0.25rem;
      p {
        color: var(--Error-500, #cb1a14);
        font-size: 0.75rem;
      }
    }
  }
  .all-brands {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  @media (max-width: 728px) {
    padding: 0rem 2.5rem 0rem 2.5rem;
  }
  @media (max-width: 500px) {
    padding: 0rem 1rem 0rem 1rem;
    gap: 1.5rem;
    .all-brands {
      flex-direction: column;
      gap: 1rem;
    }
    .top {
      flex-direction: column-reverse;
      gap: 1rem;
    }
    .other {
      flex-direction: column;
    }
    .inp form {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  @media (min-width: 500px) {
    .all-brands {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
      gap: 0.75rem;
    }
  }
  @media (min-width: 998px) {
    .all-brands {
      grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
    }
  }
`;

export const BrandItemStyles = styled.div`
  cursor: pointer;
  border-radius: 0.625rem;
  .img {
    width: 100%;
    // border-bottom: 1px solid #000;
    img {
      width: 100%;
      height: auto;
    }
  }
  .text {
    padding: 0.625rem;
    border: 1px solid #000;
    border-radius: 0rem 0rem 0.625rem 0.625rem;
  }
`;

export const AbsoluteContStyle = styled.div`
  position: fixed;
  transition: 0.4s;
  left: 50%;
  top: 50%;
  height: 100vh;
  width: 100vw;
  margin-left: -50vw;
  margin-top: -50vh;
  z-index: 20;
  background: rgba(163, 163, 163, 0.75);
`;

export const FlexAbsoluteModalStyles = styled(AbsoluteContStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #fff;
  max-width: 70%;
  padding: 3rem 3rem 2rem 3rem;
  .head {
    h4 {
      color: #000;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .two {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
    position: relative;
    height: 250px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.25rem; /* width of the scrollbar */
      background: #d9d9d9;
      border-radius: 0.125rem;
      height: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: #d9d9d9;
      width: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.25rem;
      background: #5d5fef;
    }
  }
  .details-2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 70%;
    overflow-x: scroll;
    padding-bottom: 0.25rem;
    &::-webkit-scrollbar {
      width: 0.25rem; /* width of the scrollbar */
      background: #d9d9d9;
      border-radius: 0.125rem;
      height: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: #d9d9d9;
      width: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.25rem;
      background: #5d5fef;
    }
  }
  .img {
    border-radius: 0.625rem;
    border: 1px solid #d9d9d9;
    background: #fff;
    width: 16.3125rem;
    height: 9.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deet,
  .dt {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .deet {
    h5 {
      width: 100%;
      white-space: wrap;
      word-break: break-all;
    }
  }
  .three {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
    .close {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      min-width: 120px;
      padding: 0.625rem;
      padding: 0rem 1rem 0rem 1rem;
      gap: 0.5rem;
      border: 1px solid #5d5fef;
      color: var(--Iris-100, #5d5fef);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .export {
      display: flex;
      align-items: center;
      height: 40px;
      min-width: 120px;
      padding: 0.625rem;
      padding: 0rem 1rem 0rem 1rem;
      gap: 0.5rem;
      border: 1px solid #5d5fef;
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: #5d5fef;
    }
  }
  @media (max-width: 998px) {
    padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  }
  @media (max-width: 728px) {
    padding: 2rem;
  }
  @media (max-width: 500px) {
    max-width: 95%;
    padding: 1.5rem;
    gap: 1.5rem;
    .two {
      flex-direction: column;
      gap: 1.5rem;
    }
    .details {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      height: 100px;
    }
    .details-2 {
      width: 100%;
    }
    .three {
      justify-content: right;
    }
  }
`;
