import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #1e1e1e;
  padding: 24px;
  border-radius: 16px;
  color: white;
  text-align: center;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h2`
  margin-bottom: 12px;
`;

export const Subtitle = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  color: #cccccc;
`;

export const InputNickname = styled.input`
  padding: 10px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #444;
  background: #2c2c2c;
  color: white;
  margin-bottom: 20px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #4caf50;
  }
`;

export const ConfirmButton = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: #45a049;
    }

    &:disabled {
        background-color: #888;
        cursor: not-allowed;
    }
`;