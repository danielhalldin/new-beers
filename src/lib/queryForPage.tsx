import {
  decoratedLatest,
  untappdUserBeers,
  recommemded,
  search,
} from "queries";

const getQueryForPage = (id: string) => {
  let query = recommemded;
  let variables = {};
  switch (id) {
    case "Checkins":
      query = untappdUserBeers;
      break;
    case "Rekommenderade":
      query = recommemded;
      break;
    case "Tillfälligt sortiment":
      query = decoratedLatest;
      variables = {
        stockType: "Tillfälligt sortiment",
      };
      break;
    case "Lokalt & Småskaligt":
      query = decoratedLatest;
      variables = {
        stockType: "Lokalt & Småskaligt",
      };
      break;
    case "Ordervaror":
      query = decoratedLatest;
      variables = {
        stockType: "Ordervaror",
      };
      break;
    case "Fast sortiment":
      query = decoratedLatest;
      variables = {
        stockType: "Fast sortiment",
      };
      break;
    case "Säsong":
      query = decoratedLatest;
      variables = {
        stockType: "Säsong",
      };
      break;
    case "Sök":
      let params = new URL(document.location.toString()).searchParams;
      const searchString = params.get("searchString");
      const searchType = params.get("searchType");
      const sortType = params.get("sortType");
      query = search;
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
