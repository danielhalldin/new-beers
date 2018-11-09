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
    type
    style
    country
    stockType
    systembolagetUrl
    ibu
    description
  }
`;
const decoratedLatest = gql`
  query DecoratedLatest($stockType: String!) {
    decoratedLatest(size: 40, stockType: $stockType) {
      name
      beers ${beerFragment}
    }
    untappdUser {
      admin
    }
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

const updateUntappdId = gql`
  mutation UpdateUntappdId($systembolagetArticleId: Int!, $untappdId: Int!) {
    updateUntappdId(
      systembolagetArticleId: $systembolagetArticleId
      untappdId: $untappdId
    )
  }
`;

export { decoratedLatest, untappdUser, untappdUserBeers, updateUntappdId };
