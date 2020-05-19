import React, {
  SyntheticEvent,
  FunctionComponent,
  useState,
  useRef,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";

import {
  SearchForm,
  SearchInputString,
  SearchSubmit,
  SearchDropDown,
} from "./styles";

const Search: FunctionComponent = () => {
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType] = useState("beer");
  const [sortType, setSortType] = useState("rating");

  const history = useHistory();
  const valueRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (valueRef.current !== null) {
      valueRef.current.focus();
    }
  });

  const handleSubmit = (event: SyntheticEvent) => {
    history.replace(
      "/sok-resultat?searchString=" +
        searchString +
        "&searchType=" +
        searchType +
        "&sortType=" +
        sortType
    );
    event.preventDefault();
  };

  return (
    <SearchForm onSubmit={(event) => handleSubmit(event)}>
      <SearchInputString
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        ref={valueRef}
        placeholder="Omnipollo"
      />
      <SearchDropDown
        name="searchType"
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="beer">Sök efter</option>
        <option value="brewery">Bryggeri</option>
        <option value="beer">Öl [standrad]</option>
        <option value="">Allt</option>
      </SearchDropDown>
      <SearchDropDown
        name="sortType"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="rating">Sortera på</option>
        <option value="rating">Betyg [standrad]</option>
        <option value="name">Namn</option>
      </SearchDropDown>
      <SearchSubmit type="submit" value="Sök" />
    </SearchForm>
  );
};

export default Search;
