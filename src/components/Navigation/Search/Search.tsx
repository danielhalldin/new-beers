import React, {
  SyntheticEvent,
  FunctionComponent,
  useState,
  useRef,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            ref={valueRef}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Search;
