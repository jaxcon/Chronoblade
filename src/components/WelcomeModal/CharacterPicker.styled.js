import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SwipeArea = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  background: rgba(0,0,0,0.5);
  border-radius: 20px;
  padding: 20px;
  color: white;
  max-width: 320px;
  text-align: center;
`;

export const Name = styled.h2``;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 12px 0;
`;

export const Stats = styled.div`
  margin: 10px 0;
`;

export const StatRow = styled.div`
  margin-bottom: 4px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const ChooseButton = styled.button`
  margin-top: 16px;
  padding: 10px 20px;
  font-weight: bold;
  background: #ffc107;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const NavDots = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.3)')};
  transition: background-color 0.3s;
  cursor: pointer;
`;