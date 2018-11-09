import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { updateUntappdId } from "../queries";

const BeerAdmin = ({ systembolagetArticleId }) => {
  let untappdId;

  return (
    <Mutation mutation={updateUntappdId}>
      {(UpdateUntappdId, { data }) => (
        <div>
          {data ? (
            <span>{data.updateUntappdId === true ? "SUCCESS" : "FAILED"}</span>
          ) : (
            <form
              onSubmit={e => {
                console.log(systembolagetArticleId + " " + untappdId.value);
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
              <input
                ref={node => {
                  untappdId = node;
                }}
              />
              <button type="submit">Uppdatera id</button>
            </form>
          )}
        </div>
      )}
    </Mutation>
  );
};

export default BeerAdmin;
