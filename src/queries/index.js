import gql from "graphql-tag";

const beerFragment = gql`
  {
    id
    name
    beerLabel
    brewery
    userRating
    rating
    price
    abv
    salesStartDate
    checkinDate
    systembolagetId
    systembolagetArticleId
    untappdId
    untappdUrl
    untappdDeepLink
    type
    style
    country
    stockType
    systembolagetUrl
    ibu
    description
  }
`;

const untappdUser = gql`
  {
    untappdUser {
      name
      totalBeers
      avatar
    }
  }
`;

const untappdUserBeers = gql`
  {
    untappdUserBeers ${beerFragment}
  }
`;

const decoratedLatest = gql`
  query DecoratedLatest($stockType: String!) {
    decoratedLatest(size: 120, stockType: $stockType) {
      name
      beers ${beerFragment}
    }
    untappdUser {
      admin
    }
  }
`;

const recommemded = gql`
  query Recommemded {
    recommended(size: 40) {
      name
      beers ${beerFragment}
    }
    untappdUser {
      admin
    }
  }
`;

const updateUntappdId = gql`
  mutation UpdateUntappdId($systembolagetArticleId: Int!, $untappdId: Int!) {
    updateUntappdId(
      systembolagetArticleId: $systembolagetArticleId
      untappdId: $untappdId
    )
  }
`;

const deleteBeer = gql`
  mutation DeleteBeer($systembolagetArticleId: Int!) {
    deleteBeer(systembolagetArticleId: $systembolagetArticleId)
  }
`;

export {
  decoratedLatest,
  recommemded,
  untappdUser,
  untappdUserBeers,
  updateUntappdId,
  deleteBeer
};
