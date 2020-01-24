import React from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  updateUntappdId as UPDATE_UNTAPPD_ID,
  deleteBeer as DELETE_BEER
} from "../../queries";
import { BeerAdminWrapper, Input, DeleteButton, Button, H2 } from "./styles";
import { Loader } from "../Beers/styles";

const BeerAdmin = ({ systembolagetArticleId, showAdmin }) => {
  const untappdIdRef = React.useRef();

  React.useEffect(() => {
    untappdIdRef.current.focus();
  }, []);

  const [
    updateUntappdId,
    {
      data: updateUntappdIdData,
      loading: updateUntappdIdLoading,
      error: updateUntappdIdError
    }
  ] = useMutation(UPDATE_UNTAPPD_ID);

  const [
    deleteBeer,
    { data: deleteBeerData, loading: deleteBeerLoading, error: deleteBeerError }
  ] = useMutation(DELETE_BEER);

  if (updateUntappdIdLoading || deleteBeerLoading) {
    return <Loading />;
  }
  if (updateUntappdIdError || deleteBeerError) {
    return <Error />;
  }
  if (updateUntappdIdData) {
    return <Status status={updateUntappdIdData.updateUntappdId} />;
  }
  if (deleteBeerData) {
    return <Status status={deleteBeerData.deleteBeer} />;
  }

  return (
    <BeerAdminWrapper onClick={e => e.stopPropagation()} showAdmin={showAdmin}>
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateUntappdId({
              variables: {
                systembolagetArticleId: Number(systembolagetArticleId),
                untappdId: Number(untappdIdRef.current.value)
              }
            });
            untappdIdRef.current.value = "";
          }}
        >
          <H2>Admin</H2>
          <Input
            ref={untappdIdRef}
            placeholder="UntappdId"
            id="set-uid"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "Untappd-id")}
          />
          <Button type="submit">Uppdatera</Button>
        </form>
      </>
      <form
        onSubmit={e => {
          e.preventDefault();
          deleteBeer({
            variables: {
              systembolagetArticleId: Number(systembolagetArticleId)
            }
          });
        }}
      >
        <DeleteButton type="submit">Ta bort</DeleteButton>
      </form>
    </BeerAdminWrapper>
  );
};

const Loading = () => {
  return (
    <Loader>
      <span className="beer" role="img" aria-label="Beer">
        🍺
      </span>
      Laddar...
    </Loader>
  );
};

const Error = () => {
  return <Loader>Error :(</Loader>;
};

const Status = status => {
  return <H2>{status ? "SUCCESS" : "FAILED"}</H2>;
};

export default BeerAdmin;
