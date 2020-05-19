import React, {
  SyntheticEvent,
  FunctionComponent,
  useState,
  useRef,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";

import { SearchForm, SearchInputString, SearchSubmit } from "./styles";

const Search: FunctionComponent = () => {
  const [searchString, setSearchString] = useState("");
  const history = useHistory();
  const valueRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (valueRef.current !== null) {
      valueRef.current.focus();
    }
  });

  const handleSubmit = (event: SyntheticEvent) => {
    history.replace("/sok-resultat?searchString=" + searchString);
    event.preventDefault();
  };

  return (
    <SearchForm onSubmit={(event) => handleSubmit(event)}>
      <SearchInputString
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        ref={valueRef}
        placeholder="Omnipollo Lorelei"
      />
      <SearchSubmit type="submit" value="Sök" />
    </SearchForm>
  );
};

export default Search;
