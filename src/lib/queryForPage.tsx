import {
  RecommemdedDocument,
  UntappdUserBeersDocument,
  DecoratedLatestDocument,
  SearchDocument,
} from "common/generated/generated";

const getQueryForPage = (id: string) => {
  let query = UntappdUserBeersDocument;
  let variables = {};
  switch (id) {
    case "Checkins":
      query = UntappdUserBeersDocument;
      break;
    case "Rekommenderade":
      query = RecommemdedDocument;
      break;
    case "Tillfälligt sortiment":
      query = DecoratedLatestDocument;
      variables = {
        stockType: "Tillfälligt sortiment",
      };
      break;
    case "Lokalt & Småskaligt":
      query = DecoratedLatestDocument;
      variables = {
        stockType: "Lokalt & Småskaligt",
      };
      break;
    case "Ordervaror":
      query = DecoratedLatestDocument;
      variables = {
        stockType: "Ordervaror",
      };
      break;
    case "Fast sortiment":
      query = DecoratedLatestDocument;
      variables = {
        stockType: "Fast sortiment",
      };
      break;
    case "Säsong":
      query = DecoratedLatestDocument;
      variables = {
        stockType: "Säsong",
      };
      break;
    case "Sök":
      let params = new URL(document.location.toString()).searchParams;
      const searchString = params.get("searchString");
      const searchType = params.get("searchType");
      const sortType = params.get("sortType");
      query = SearchDocument;
      variables = {
        searchString,
        searchType,
        sortType,
      };
      break;
  }

  return {
    query,
    variables,
  };
};

export default getQueryForPage;
