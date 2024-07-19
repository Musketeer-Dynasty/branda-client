import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #d9d9d9;
  // height: 5.375rem;
  gap: 2rem;
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
    white-space: nowrap;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  @media (max-width: 998px) {
    padding: 1.25rem 2.5rem 1.25rem 2.5rem;
    flex-direction: column-reverse;
  }
  @media (min-width: 998px) {
    height: 5.375rem;
  }
`;
