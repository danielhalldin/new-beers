import gql from "graphql-tag";

const decoratedLatest = gql`
  {
    decoratedLatest(size: 30) {
      id
      name
      beerLabel
      brewery
      userRating
      rating
      price
      abv
      salesStartDate
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
  }
`;

export { decoratedLatest };
