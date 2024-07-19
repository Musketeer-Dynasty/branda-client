import styled from "styled-components";

export const RootLayoutStyles = styled.main`
  background: #e4f0f4;
  padding-top: 1.5rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DashboardRootStyles = styled.main`
  padding-top: 1.5rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoutModalStyles = styled.div`
  text-align: center;
  width: 60%;
  .pop {
    border-radius: 1.25rem;
    background: #fff;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.59rem;
    .up {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .x {
      cursor: pointer;
    }
    .x,
    .l {
      display: flex;
      justify-content: right;
    }
    .l {
      justify-content: center;
    }
    h4 {
      color: var(--Gray-900, #101828);
      text-align: center;
      font-feature-settings: "cv01" on, "cv04" on, "cv03" on;
      font-size: 1.125rem;
      font-style: normal;
      font-family: var(--font-spectral);
      font-weight: 600;
      line-height: 1.5rem; /* 133.333% */
    }
    p {
      color: var(--Gray-600, #475467);
      text-align: center;
      font-size: 0.875rem;
      font-style: normal;
      font-family: var(--font-dm);
      font-weight: 500;
      line-height: 1.25rem; /* 142.857% */
    }
  }
  .down {
    margin-top: 1.5rem;
    button {
      width: 100%;
      height: 3rem;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      background: #f32d2d;
      color: var(--Neutrals-Colors-100, #fff);
      text-align: center;
      font-feature-settings: "cv04" on, "cv01" on, "cv03" on;
      font-size: 0.875rem;
      font-style: normal;
      font-family: var(--font-dm);
      font-weight: 700;
      line-height: 1.25rem; /* 142.857% */
    }
  }
  @media (max-width: 500px) {
    width: 91%;
  }
  @media (min-width: 998px) {
    width: 35%;
  }
`;


