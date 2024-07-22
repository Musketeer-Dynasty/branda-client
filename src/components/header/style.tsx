import styled from "styled-components";
import { AbsoluteContStyle } from "../dashboard/style";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  padding: 0rem 4.5rem 0rem 4.5rem;
  justify-content: space-between;
  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  a {
    p {
      color: #000;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    border: 1px solid #000;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h5 {
      color: #000;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  .fk {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      text-transform: capitalize;
    }
  }
  button {
    background: #5d5fef;
    height: 40px;
    min-width: 120px;
    padding: 0.625rem;
    padding: 0rem 1rem 0rem 1rem;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .menu, .x {
    cursor: pointer;
  }
  @media (max-width: 728px) {
    padding: 0rem 2.5rem 0rem 2.5rem;
    .desktop {
      display: none;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem 1rem 0rem 1rem;
    .desktop {
      display: none;
    }
  }
  @media (min-width: 728px) {
    .mobile {
      display: none;
    }
  }
`;

export const MobileDropdownStyles = styled(AbsoluteContStyle)`
  display: flex;
  justify-content: right;
  .right {
    width: 70%;
    height: 100vh;
    background: #fff;
    z-index: 3;
    padding: 1.5rem 1.25rem 2rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .left {
    cursor: pointer;
    width: 30%;
  }
  .cx {
    display: flex;
    justify-content: right;
  }
  @media (min-width: 728px) {
    display: none;
  }
`;
