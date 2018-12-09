import React, { Component } from "react";
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

export default class BeerAdmin extends Component {
  constructor(props) {
    super(props);
    this.untappdIdRef = React.createRef();
  }

  componentDidMount() {
    this.untappdIdRef.current.focus();
  }

  Loading = () => {
    return (
      <Loader>
        <span className="beer" role="img" aria-label="Beer">
          🍺
        </span>
        Laddar...
      </Loader>
    );
  };

  Error = () => {
    return <Loader>Error :(</Loader>;
  };

  Status = status => {
    return <H2>{status === true ? "SUCCESS" : "FAILED"}</H2>;
  };

  render() {
    const { systembolagetArticleId } = this.props;
    return (
      <BeerAdminWrapper onClick={e => e.stopPropagation()}>
        <Mutation mutation={updateUntappdId}>
          {(UpdateUntappdId, { loading, error, data }) => {
            if (loading) {
              return this.Loading();
            }
            if (error) {
              return this.Error();
            }
            if (data) {
              return this.Status(data.updateUntappdId);
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
                        untappdId: Number(this.untappdIdRef.current.value)
                      }
                    });
                    this.untappdIdRef.current.value = "";
                  }}
                >
                  <Input
                    innerRef={this.untappdIdRef}
                    placeholder="UntappdId"
                    id="set-uid"
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = "Untappd-id")}
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
              return this.Loading();
            }
            if (error) {
              return this.Error();
            }
            if (data) {
              return this.Status(data.deleteBeer);
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
  }
}
