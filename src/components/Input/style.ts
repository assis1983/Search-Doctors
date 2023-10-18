import styled from "styled-components";

export const InputCheckbox = styled.div`
  position: relative;
  padding: 1.5rem;

  input:hover {
    border: 1px solid #00c247;
    color: #00c247;
  }

  &.success input:focus {
    border: 1px solid #00c247;
    color: #00c247;
  }

  &.success {
    input {
      border: 1px solid #00c247;
    }

    label,
    input {
      color: #00c247;
    }
  }

  input {
    position: aboslute;
    margin-left: -1.5rem;
    height: 3rem;
    width: 25rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    outline: none;
  }

  label {
    margin-left: -1rem;
    font-size: 1rem;
    position: absolute;
    top: 0.5rem;
    padding: 1px;
    background: white;
  }

  .eyeIconDiv {
    position: relative;
    cursor: pointer;
    left: 340px;
    top: -30px;
  }
`;
