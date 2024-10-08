import styled from "styled-components";

export const SearchBarContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const SuggestionItem = styled.div`
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  background-color: ${({ isActive }) => (isActive ? "#eee" : "#fff")};

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;
