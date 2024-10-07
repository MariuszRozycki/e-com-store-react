import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SearchBar.styled";

const SearchBar = ({ products, onFilter }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const results = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredSuggestions(results);
      setActiveSuggestionIndex(0);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, products]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onFilter(e.target.value);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveSuggestionIndex((prevIndex) => (prevIndex === filteredSuggestions.length - 1 ? 0 : prevIndex + 1));
    } else if (e.key === "ArrowUp") {
      setActiveSuggestionIndex((prevIndex) => (prevIndex === 0 ? filteredSuggestions.length - 1 : prevIndex - 1));
    } else if (e.key === "Enter") {
      if (filteredSuggestions.length > 0) {
        handleProductClick(filteredSuggestions[activeSuggestionIndex].id);
      }
    }
  };

  return (
    <S.SearchBarContainer>
      <S.SearchInput
        type='text'
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Search products...'
      />
      {filteredSuggestions.length > 0 && (
        <S.SuggestionsContainer>
          {filteredSuggestions.map((product, index) => (
            <S.SuggestionItem
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              isActive={index === activeSuggestionIndex}
            >
              {product.title}
            </S.SuggestionItem>
          ))}
        </S.SuggestionsContainer>
      )}
    </S.SearchBarContainer>
  );
};

export default SearchBar;
