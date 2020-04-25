import React from "react";
import { decoratedLatest, untappdUserBeers, recommemded } from "../queries";
import Beers from "../components/Beers";
import Categories from "../components/Categories";
import Search from "../images/search.svg";
import Checkin from "../images/checkin.svg";
import Rekommended from "../images/rekommended.svg";
import Stock from "../images/stock.svg";

const routes = [
  {
    path: "/checkins",
    id: "Checkins",
    menuIndex: 0,
    icon: Checkin,
    component: <Beers path="/checkins" />,
    query: untappdUserBeers,
  },
  {
    path: "/rekommenderade",
    id: "Rekommenderade",
    menuIndex: 1,
    icon: Rekommended,
    component: <Beers path="/rekommenderade" />,
    query: recommemded,
  },
  {
    path: "/katagorier/tillfalligt-sortiment",
    id: "Tillfälligt sortiment",
    menuIndex: -1,
    component: <Beers path="/katagorier/tillfalligt-sortiment" />,
    query: decoratedLatest,
  },
  {
    path: "/katagorier/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    menuIndex: -1,
    component: <Beers path="/katagorier/lokalt-och-smaskaligt" />,
    query: decoratedLatest,
  },
  {
    path: "/katagorier/sasong",
    id: "Säsong",
    menuIndex: -1,
    component: <Beers path="/katagorier/sasong" />,
    query: decoratedLatest,
  },
  {
    path: "/katagorier/fast-sortiment",
    id: "Fast sortiment",
    menuIndex: -1,
    component: <Beers path="/katagorier/fast-sortiment" />,
    query: decoratedLatest,
  },
  {
    path: "/katagorier/ordervaror",
    id: "Ordervaror",
    menuIndex: -1,
    component: <Beers path="/katagorier/ordervaror" />,
    query: decoratedLatest,
  },
  {
    path: "/katagorier",
    id: "Kategorier",
    menuIndex: 3,
    icon: Stock,
    component: <Categories />,
    query: untappdUserBeers,
  },
  {
    path: "/sok",
    id: "Sök",
    menuIndex: 3,
    icon: Search,
    disabled: true,
  },
];

export default routes;
