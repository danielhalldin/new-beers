import { gql } from "@apollo/client";

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
      id
      name
      totalBeers
      avatar
    }
    untappdIsFriend
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
      id
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
      id
      admin
    }
  }
`;

const search = gql`
  query Search($searchString: String!, $searchType: String, $sortType: String) {
    systembolagetSearch(searchString: $searchString, sortType: $sortType, searchType: $searchType, size: 100) 
      ${beerFragment}
  
    untappdUser {
      id
      admin
    }
  }
`;

const stock = gql`
  query Stock {
    systembolagetStock {
      nrOfBeers
      name
      nextRelease
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
  search,
  stock,
  untappdUser,
  untappdUserBeers,
  updateUntappdId,
  deleteBeer,
};
