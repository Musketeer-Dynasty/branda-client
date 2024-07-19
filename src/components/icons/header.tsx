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

export const LogoutPopIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.9677 26.9677C51.0524 27.883 51.0524 29.367 51.9677 30.2823L57.3417 35.6562H31.75C30.4556 35.6562 29.4062 36.7056 29.4062 38C29.4062 39.2944 30.4556 40.3438 31.75 40.3438H57.3417L51.9677 45.7177C51.0524 46.633 51.0524 48.117 51.9677 49.0323C52.883 49.9476 54.367 49.9476 55.2823 49.0323L64.6573 39.6573C65.5726 38.742 65.5726 37.258 64.6573 36.3427L55.2823 26.9677C54.367 26.0524 52.883 26.0524 51.9677 26.9677Z"
        fill="#E53F33"
      />
      <path
        d="M13 38C13 51.8071 24.1929 63 38 63V51.2812C38 48.335 38 46.8618 37.0847 45.9465C36.1694 45.0312 34.6963 45.0312 31.75 45.0312Lnan nanL31.75 45.0312C27.8668 45.0312 24.7188 41.8833 24.7188 38C24.7188 34.1167 27.8668 30.9688 31.75 30.9688Lnan nanL31.75 30.9688C34.6963 30.9688 36.1694 30.9688 37.0847 30.0535C38 29.1382 38 27.665 38 24.7188V13C24.1929 13 13 24.1929 13 38Z"
        fill="#FFE5DD"
      />
    </svg>
  );
};