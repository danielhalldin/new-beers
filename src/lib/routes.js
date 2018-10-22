import React from "react";

import Beers from "../components/Beers";
import Checkins from "../components/Checkins";

const routes = [
  {
    componenet: <Beers stockType="Små partier" />,
    path: "/sma-partier",
    id: "Små partier"
  },
  {
    componenet: <Beers stockType="Lokalt och småskaligt" />,
    path: "/lokalt-och-smaskaligt",
    id: "Lokalt och småskaligt"
  },
  {
    componenet: <Beers stockType="Övrigt sortiment" />,
    path: "/ovrigt-sortiment",
    id: "Övrigt sortiment"
  },
  {
    componenet: <Beers stockType="Ordinarie sortiment" />,
    path: "/ordinarie-sortiment",
    id: "Ordinarie sortiment"
  },
  {
    componenet: <Checkins stockType="Checkins" />,
    path: "/checkins",
    id: "Checkins"
  }
];

export default routes;
