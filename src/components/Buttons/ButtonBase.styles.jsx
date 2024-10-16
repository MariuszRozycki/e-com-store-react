import styled from "styled-components";

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius.btn};
  border: 0;
  cursor: pointer;
  justify-self: center;
  background-color: ${({ theme }) => theme.backgroundColor.btn};
  font-size: 18px;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  transition: ${({ theme }) => theme.transitions.standard};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.null};
  }
`;
