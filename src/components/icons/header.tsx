import styled from "styled-components";

export const LogoStyles = styled.h3`
  color: #000;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Logo = () => {
  return <LogoStyles>Branda</LogoStyles>;
};

export const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="black"
      />
    </svg>
  );
};
export const MenuIcon = () => {
  return (
    <svg
      width="25"
      height="18"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5625"
        y1="1"
        x2="24.5625"
        y2="1"
        stroke="#0E0D0D"
        strokeWidth="2"
      />
      <line
        x1="0.5625"
        y1="9"
        x2="24.5625"
        y2="9"
        stroke="#0E0D0D"
        strokeWidth="2"
      />
      <line
        x1="0.5625"
        y1="17"
        x2="24.5625"
        y2="17"
        stroke="#0E0D0D"
        strokeWidth="2"
      />
    </svg>
  );
};
