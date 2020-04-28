import React from "react";
import { decoratedLatest, untappdUserBeers, recommemded } from "../queries";
import Beers from "../components/Beers";
import Categories from "../components/Categories";
import { ReactComponent as Rekommended } from "../images/star-fill.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Stock } from "../images/grid-fill.svg";

const routes = [
  {
    path: "/checkins",
    id: "Checkins",
    menuIndex: -1,
    component: <Beers path="/checkins" />,
    query: untappdUserBeers,
    queryVariables: {},
  },
  {
    path: "/rekommenderade",
    id: "Rekommenderade",
    menuIndex: 1,
    icon: <Rekommended />,
    component: <Beers path="/rekommenderade" />,
    query: recommemded,
    queryVariables: {},
  },
  {
    path: "/katagorier/tillfalligt-sortiment",
    id: "Tillfälligt sortiment",
    menuIndex: -1,
    component: <Beers path="/katagorier/tillfalligt-sortiment" />,
    query: decoratedLatest,
    queryVariables: { stockType: "Tillfälligt sortiment" },
  },
  {
    path: "/katagorier/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    menuIndex: -1,
    component: <Beers path="/katagorier/lokalt-och-smaskaligt" />,
    query: decoratedLatest,
    queryVariables: { stockType: "Lokalt & småskaligt" },
  },
  {
    path: "/katagorier/ordervaror",
    id: "Ordervaror",
    menuIndex: -1,
    component: <Beers path="/katagorier/ordervaror" />,
    query: decoratedLatest,
    queryVariables: { stockType: "Ordervaror" },
  },
  {
    path: "/katagorier/fast-sortiment",
    id: "Fast sortiment",
    menuIndex: -1,
    component: <Beers path="/katagorier/fast-sortiment" />,
    query: decoratedLatest,
    queryVariables: { stockType: "Fast sortiment" },
  },
  {
    path: "/katagorier/sasong",
    id: "Säsong",
    menuIndex: -1,
    component: <Beers path="/katagorier/sasong" />,
    query: decoratedLatest,
    queryVariables: { stockType: "Säsong" },
  },
  {
    path: "/katagorier",
    id: "Kategorier",
    menuIndex: 3,
    icon: <Stock />,
    component: <Categories />,
    submenu: true,
  },
  {
    path: "/sok",
    id: "Sök",
    menuIndex: 3,
    icon: <Search />,
    disabled: true,
  },
];

export default routes;
