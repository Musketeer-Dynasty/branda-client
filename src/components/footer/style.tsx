import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #d9d9d9;
  height: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 4.5rem 0rem 4.5rem;
  margin-top: 5%;
  flex-wrap: wrap;
  p {
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  @media (max-width: 998px) {
    padding: 0rem 2.5rem 0rem 2.5rem;
    flex-direction: column-reverse;
  }
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
