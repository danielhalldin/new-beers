import React from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  updateUntappdId as UPDATE_UNTAPPD_ID,
  deleteBeer as DELETE_BEER
} from "../../../queries";
import {
  AdminWrapper,
  Input,
  DeleteButton,
  Button,
  H2,
  StatusWrapper
} from "./styles";

const BeerAdmin = ({ systembolagetArticleId, showAdmin }) => {
  const untappdIdRef = React.useRef();

  React.useEffect(() => {
    if (showAdmin) {
      untappdIdRef.current.focus();
    }
  }, [showAdmin]);

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

  return (
    <AdminWrapper onClick={e => e.stopPropagation()} showAdmin={showAdmin}>
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
            id={`set-uid-${Math.random()}`}
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "Untappd-id")}
            pattern="[0-9]*"
          />
          <Button type="submit">Uppdatera</Button>
          <StatusWrapper>
            {updateUntappdIdLoading && <Loading />}
            {updateUntappdIdError && <Error />}
            {updateUntappdIdData && (
              <Status status={updateUntappdIdData.updateUntappdId} />
            )}
          </StatusWrapper>
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
        <StatusWrapper>
          {deleteBeerData && <Status status={deleteBeerData.deleteBeer} />}
          {deleteBeerLoading && <Loading />}
          {deleteBeerError && <Error />}
        </StatusWrapper>
      </form>
    </AdminWrapper>
  );
};

const Loading = () => {
  return "Laddar... 🍺";
};

const Error = () => {
  return "Misslyckades 👎🏻";
};

const Status = status => {
  return status ? "Lyckades 👍🏻" : "Misslyckades 👎🏻";
};

export default BeerAdmin;
