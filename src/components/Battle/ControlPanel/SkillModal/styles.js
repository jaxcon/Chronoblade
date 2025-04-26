import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const SkillButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f9f9f9;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    background: #e6e6e6;
  }
`;

export const CancelButton = styled(SkillButton)`
  margin-top: 16px;
  background: transparent;
  border: none;
  color: #999;

  &:hover {
    color: #666;
  }
`;