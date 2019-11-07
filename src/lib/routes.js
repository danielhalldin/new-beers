import React from "react";
import { decoratedLatest, untappdUserBeers, recommemded } from "../queries";
import Beers from "../components/Beers";

const routes = [
  {
    component: <Beers stockType="Rekommenderade" />,
    path: "/rekommenderade",
    id: "Rekommenderade",
    query: recommemded
  },
  {
    component: <Beers stockType="Tillfälligt sortiment" />,
    path: "/tillfalligt-sortiment",
    id: "Tillfälligt sortiment",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Lokalt & småskaligt" />,
    path: "/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Säsong" />,
    path: "/sasong",
    id: "Säsong",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Fast sortiment" />,
    path: "/fast-sortiment",
    id: "Fast sortiment",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Ordervaror" />,
    path: "/ordervaror",
    id: "Ordervaror",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Checkins" />,
    path: "/checkins",
    id: "Checkins",
    query: untappdUserBeers
  }
];

export default routes;
