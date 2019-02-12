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
    component: <Beers stockType="Små partier" />,
    path: "/sma-partier",
    id: "Små partier",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Lokalt och småskaligt" />,
    path: "/lokalt-och-smaskaligt",
    id: "Lokalt och småskaligt",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Övrigt sortiment" />,
    path: "/ovrigt-sortiment",
    id: "Övrigt sortiment",
    query: decoratedLatest
  },
  {
    component: <Beers stockType="Ordinarie sortiment" />,
    path: "/ordinarie-sortiment",
    id: "Ordinarie sortiment",
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
