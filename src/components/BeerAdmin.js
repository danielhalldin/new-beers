import React from "react";
import { Mutation } from "react-apollo";
import { updateUntappdId, deleteBeer } from "../queries";
import {
  BeerAdminWrapper,
  Input,
  DeleteButton,
  Button,
  H2
} from "./BeerAdmin.styles";
import { Loader } from "./Beers.styles";

const BeerAdmin = ({ systembolagetArticleId }) => {
  let untappdId;

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
    return <H2>{status === true ? "SUCCESS" : "FAILED"}</H2>;
  };

  return (
    <BeerAdminWrapper onClick={e => e.stopPropagation()}>
      <Mutation mutation={updateUntappdId}>
        {(UpdateUntappdId, { loading, error, data }) => {
          if (loading) {
            return Loading();
          }
          if (error) {
            return Error();
          }
          if (data) {
            return Status(data.updateUntappdId);
          }

          return (
            <>
              <H2>Uppdatera Untappd-id</H2>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  UpdateUntappdId({
                    variables: {
                      systembolagetArticleId: Number(systembolagetArticleId),
                      untappdId: Number(untappdId.value)
                    }
                  });
                  untappdId.value = "";
                }}
              >
                <Input
                  placeholder="UntappdId"
                  id="set-uid"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Untappd-id")}
                  innerRef={node => {
                    untappdId = node;
                  }}
                />
                <Button type="submit">Uppdatera</Button>
              </form>
            </>
          );
        }}
      </Mutation>

      <Mutation mutation={deleteBeer}>
        {(DeleteBeer, { loading, error, data }) => {
          if (loading) {
            return Loading();
          }
          if (error) {
            return Error();
          }
          if (data) {
            return Status(data.deleteBeer);
          }

          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                DeleteBeer({
                  variables: {
                    systembolagetArticleId: Number(systembolagetArticleId)
                  }
                });
              }}
            >
              <DeleteButton type="submit">Ta bort</DeleteButton>
            </form>
          );
        }}
      </Mutation>
    </BeerAdminWrapper>
  );
};

export default BeerAdmin;
