import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ModalContent = styled.div`
    background: #1e1e1e;
    color: white;
    padding: 32px;
    border-radius: 16px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 0 24px rgba(255, 0, 0, 0.4);
`;

export const ModalTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
`;

export const ModalStats = styled.div`
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.5;
`;

export const ModalButton = styled.button`
    background: #ffc107;
    color: black;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 8px;

    &:hover {
        background: #ffda44;
}
`;
