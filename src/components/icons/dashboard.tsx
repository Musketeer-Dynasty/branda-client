import { Rotate } from "@/animations/button";
import styled, { css } from "styled-components";

export const AngleDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="13"
      viewBox="0 0 23 13"
      fill="none"
    >
      <path
        d="M1 1L11.5 12L22 1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export interface ISelectedcompStyle {
  $isSelected: boolean;
}

export const ArrowStyles = styled.div<ISelectedcompStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.25s;
    scale: 0.85;
  }
  ${(props) =>
    props.$isSelected &&
    css`
      svg {
        transform: rotate(180deg);
        transition: 0.25s;
      }
    `}
`;

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.8333 3.33333C10.8333 2.8731 10.4602 2.5 10 2.5C9.53976 2.5 9.16667 2.8731 9.16667 3.33333V9.16667H3.33333C2.8731 9.16667 2.5 9.53976 2.5 10C2.5 10.4602 2.8731 10.8333 3.33333 10.8333H9.16667V16.6667C9.16667 17.1269 9.53976 17.5 10 17.5C10.4602 17.5 10.8333 17.1269 10.8333 16.6667V10.8333H16.6667C17.1269 10.8333 17.5 10.4602 17.5 10C17.5 9.53976 17.1269 9.16667 16.6667 9.16667H10.8333V3.33333Z"
        fill="#5D5FEF"
      />
    </svg>
  );
};

export const ButtonLoader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top: 4px solid transparent;
  margin: auto;
  animation: ${Rotate} 0.6s ease infinite;
`;

export const ColoredButtonLoader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #5D5FEF;
  border-top: 4px solid transparent;
  margin: auto;
  animation: ${Rotate} 0.6s ease infinite;
`;


export const BulletPoint = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="9.5" fill="#D9D9D9" stroke="#5D5FEF" />
    </svg>
  );
};
export const SelectedBulletPoint = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="9.5" fill="#D9D9D9" stroke="#5D5FEF" />
      <circle cx="10" cy="10" r="5.5" fill="#5D5FEF" />
    </svg>
  );
};
