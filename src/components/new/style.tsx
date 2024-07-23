import styled, { css } from "styled-components";
import { ISelectedcompStyle } from "../icons/dashboard";
import { motion } from "framer-motion";
import { upVariant } from "@/animations/animations";

export const DashboardStyle = styled.div`
  padding: 0rem 4.5rem 0rem 4.5rem;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  .cont {
    width: 45%;
    min-height: 60vh;
    display: flex;
    align-items: stretch;
  }
  @media (max-width: 998px) {
    padding: 0rem 3.5rem 0rem 3.5rem;
    .cont {
      width: 70%;
      min-height: 40vh;
    }
  }
  @media (max-width: 728px) {
    padding: 0rem 2.5rem 0rem 2.5rem;
    .cont {
      min-height: 40vh;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem 1rem 0rem 1rem;
    .cont {
      width: 100%;
    }
  }
`;

export const FirstFormStyle = styled.div`
  padding: 2.5rem;
  border-radius: 0.625rem;
  border: 1px solid #000;
  background: #fff;
  width: 100%;
  flex: 1;
  h3 {
    color: #000;
    font-size: 1.35rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.88rem;
    margin-top: 1.25rem;
  }
  .form-ele {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .aud {
    textarea {
      height: 5rem;
      padding: 0.625rem;
      width: 100%;
      background: #f5f5f5;
    }
  }
  .desc {
    textarea {
      height: 6.375rem;
      padding: 0.625rem;
      width: 100%;
      background: #f5f5f5;
    }
  }
  .btn {
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
  }
  label {
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .error-bdr {
    border: 1px solid red;
  }
  @media (max-width: 728px) {
    padding: 2rem;
  }
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

export const DropdownStyles = styled.div`
  position: relative;
  .head {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #f5f5f5;
    padding: 0.625rem;
    p {
      color: #000;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  width: 100%;
  .dropdown {
    position: absolute;
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    height: 130px;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 0.3125rem;
    border: 1px solid #e4e7ec;
    background: #fff;
    padding: 1rem 0.5rem 1rem 1rem;
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
  @media (max-width: 500px) {
    .dropdown {
      padding: 1rem 0.5rem 1rem 0.5rem;
    }
  }
`;

export const DropCompStyles = styled.div<ISelectedcompStyle>`
  padding: 0.5rem;
  cursor: pointer;
  p {
    color: #000;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 142.857% */
  }
  &:hover {
    border-radius: 0.125rem;
    background: #5d5fef;
    p {
      color: var(--Neutrals-Colors-100, #fff);
    }
  }

  ${(props) =>
    props.$isSelected &&
    css`
      border-radius: 0.125rem;
      background: #5d5fef;
      p {
        color: var(--Neutrals-Colors-100, #fff);
      }
    `}
`;

export const MultiStepFormStyle = styled.div`
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  border: 1px solid #000;
  border-radius: 0.625rem;
  background: #f5f5f5;
  width: 100%;
  .stage-head {
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 728px) {
    padding: 2rem;
  }
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

export const StageStyle = styled.div<ISelectedcompStyle>`
  display: flex;
  align-items: center;
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8125rem;
    height: 1.8125rem;
    padding: 0.625rem;
    border-radius: 1.875rem;
    background: #000;
    transition: 0.25s;
    p {
      color: #f5f5f5;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .dash {
    width: 2.5rem;
    height: 0.1875rem;
    background: #000;
    transition: 0.25s;
  }
  ${(props) =>
    props.$isSelected &&
    css`
      .circle,
      .dash {
        background: var(--Iris-100, #5d5fef);
        transition: 0.25s;
      }
    `}
`;

export const VaryingStepStyle = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: upVariant,
}))`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .top {
    h3 {
      color: #000;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #000;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .btn {
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
  }
`;
