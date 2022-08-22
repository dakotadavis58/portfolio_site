import styled from "styled-components";
import { COLORS } from "../../globalStyles";

const { purple, darkBg, almostWhite, lightGrey } = COLORS;

export const StyledContainer = styled.div`
  padding: 25px 12px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
export const Title = styled.h2`
  color: ${({ lightText }) => (lightText ? almostWhite : darkBg)};
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? lightGrey : darkBg)};
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
export const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
export const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
  }
`;

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
