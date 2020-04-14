import React from "react";
import { decoratedLatest, untappdUserBeers, recommemded } from "../queries";
import Beers from "../components/Beers";

const routes = [
  {
    component: <Beers path="/rekommenderade" />,
    path: "/rekommenderade",
    id: "Rekommenderade",
    query: recommemded,
  },
  {
    component: <Beers path="/tillfalligt-sortiment" />,
    path: "/tillfalligt-sortiment",
    id: "Tillfälligt sortiment",
    query: decoratedLatest,
  },
  {
    component: <Beers path="/lokalt-och-smaskaligt" />,
    path: "/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    query: decoratedLatest,
  },
  {
    component: <Beers path="/sasong" />,
    path: "/sasong",
    id: "Säsong",
    query: decoratedLatest,
  },
  {
    component: <Beers path="/fast-sortiment" />,
    path: "/fast-sortiment",
    id: "Fast sortiment",
    query: decoratedLatest,
  },
  {
    component: <Beers path="/ordervaror" />,
    path: "/ordervaror",
    id: "Ordervaror",
    query: decoratedLatest,
  },
  {
    component: <Beers path="/checkins" />,
    path: "/checkins",
    id: "Checkins",
    query: untappdUserBeers,
  },
];

export default routes;
