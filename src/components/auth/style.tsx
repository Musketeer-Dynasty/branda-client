import styled from "styled-components";

export const AuthStyles = styled.div`
  padding: 0rem;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthFormStyles = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    min-height: 60vh;
    border-radius: 0.625rem;
  }
  .form-head {
    h4 {
      color: #000;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
    }
    .form-error {
      font-size: 1rem;
      color: var(--Error-500, #cb1a14);
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .forgot {
    display: flex;
    justify-content: right;
    margin-top: 0.75rem;
    a {
      width: fit-content;
    }
  }
  .form-ele {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      color: #000;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .inp {
      position: relative;
      input,
      .dob {
        border-radius: 0.6875rem;
        height: 3.125rem;
        padding: 1rem;
        padding-right: 2.5rem;
        border: 1px solid #999af8;
        width: 100%;
        color: #1f1e1e;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        font-family: var(--font-dm);
        line-height: 1.25rem; /* 142.857% */
      }
      input {
        background: transparent;
      }
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #e4f0f4 inset !important;
        -webkit-text-fill-color: #1f1e1e !important;
      }
    }
    .dob {
      cursor: pointer;
    }
    .calendar {
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 5;
    }
    input[type="password"] {
      color: #1f1e1e;
      font-size: 1.5rem;
      font-style: normal;
    }
    input::placeholder {
      color: var(--Grey-400, #98a2b3);
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.25rem; /* 142.857% */
    }
    /* For WebKit-based browsers (e.g., Chrome, Safari) */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* For Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    .abs {
      position: absolute;
      right: 1rem;
      top: 0.95rem;
      height: fit-content;
      svg {
        cursor: pointer;
      }
    }
  }
  .error-msg {
    color: var(--Error-500, #cb1a14);
  }
  .form-ele .inp .correct {
    color: var(--Success-600, #04802e);
  }
  .form-ele .inp .error-bdr {
    border: 1px solid #eb5017;
  }
  .countdown {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .m-btn {
    margin-top: 0rem;
    button {
      width: 100%;
      border-radius: 0.75rem;
      background: #800080;
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      height: 2.875rem;
    }
  }
  .btn {
    margin-top: 1.5rem;
    button {
      width: 100%;
      border-radius: 0.75rem;
      background: #5d5fef;
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      height: 2.875rem;
    }
  }
  .info {
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 998px) {
    .form {
      width: 100%;
    }
  }
  @media (max-width: 728px) {
    .form-head {
      h3 {
        font-size: 2.25rem;
      }
      p {
        font-size: 1.125rem;
      }
    }
    label {
      font-size: 1.125rem;
    }
  }
  @media (max-width: 500px) {
    .form {
      width: 100%;
    }
  }
  @media (min-width: 998px) {
    width: 35%;
    .info {
      img {
        width: 14.5rem;
        height: 10.4375rem;
      }
    }
  }
`;
