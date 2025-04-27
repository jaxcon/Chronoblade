import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background: linear-gradient(135deg, black 0%, gray 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavDots = styled.div`
    margin: 10px 0 24px 0;
    display: flex;
    gap: 12px;
`;

export const Dot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.3)')};
    transition: background-color 0.3s;
    cursor: pointer;
`;