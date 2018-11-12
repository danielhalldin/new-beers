import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { updateUntappdId, deleteBeer } from "../queries";
import { BeerAdminWrapper, Input, Row, Cell } from "./BeerAdmin.styles";

const BeerAdmin = ({ systembolagetArticleId }) => {
  let untappdId;

  return (
    <BeerAdminWrapper onClick={e => e.stopPropagation()}>
      <Mutation mutation={updateUntappdId}>
        {(UpdateUntappdId, { data }) => (
          <>
            {data ? (
              <span>
                {data.updateUntappdId === true ? "SUCCESS" : "FAILED"}
              </span>
            ) : (
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
                <Row>
                  <Cell>
                    <Input
                      placeholder="UntappdId"
                      id="set-uid"
                      onFocus={e => (e.target.placeholder = "")}
                      onBlur={e => (e.target.placeholder = "UntappdId")}
                      ref={node => {
                        untappdId = node;
                      }}
                    />
                  </Cell>
                  <Cell>
                    <button type="submit">Uppdatera</button>
                  </Cell>
                </Row>
              </form>
            )}
          </>
        )}
      </Mutation>
      <Mutation mutation={deleteBeer}>
        {(DeleteBeer, { data }) => (
          <>
            {data ? (
              <span>{data.deleteBeer === true ? "SUCCESS" : "FAILED"}</span>
            ) : (
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
                <Row>
                  <Cell>Ta bort öl</Cell>
                  <Cell>
                    <button type="submit">Ta bort</button>
                  </Cell>
                </Row>
              </form>
            )}
          </>
        )}
      </Mutation>
    </BeerAdminWrapper>
  );
};

export default BeerAdmin;
