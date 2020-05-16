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
    case "Lokalt & småskaligt":
      query = decoratedLatest;
      variables = {
        stockType: "Lokalt & småskaligt",
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
      query = search;
      break;
  }

  return {
    query,
    variables,
  };
};

export default getQueryForPage;
