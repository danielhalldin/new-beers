import React, { Suspense, lazy } from "react";
const Beers = lazy(() => import("../components/Beers"));
const Checkins = lazy(() => import("../components/Checkins"));
const suspenceFallback = <div>Loading...</div>;

const routes = [
  {
    componenet: (
      <Suspense fallback={suspenceFallback}>
        <Beers stockType="Små partier" />
      </Suspense>
    ),
    path: "/sma-partier",
    id: "Små partier"
  },
  {
    componenet: (
      <Suspense fallback={suspenceFallback}>
        <Beers stockType="Lokalt och småskaligt" />
      </Suspense>
    ),
    path: "/lokalt-och-smaskaligt",
    id: "Lokalt och småskaligt"
  },
  {
    componenet: (
      <Suspense fallback={suspenceFallback}>
        <Beers stockType="Övrigt sortiment" />
      </Suspense>
    ),
    path: "/ovrigt-sortiment",
    id: "Övrigt sortiment"
  },
  {
    componenet: (
      <Suspense fallback={suspenceFallback}>
        <Beers stockType="Ordinarie sortiment" />
      </Suspense>
    ),
    path: "/ordinarie-sortiment",
    id: "Ordinarie sortiment"
  },
  {
    componenet: (
      <Suspense fallback={suspenceFallback}>
        <Checkins stockType="Checkins" />
      </Suspense>
    ),
    path: "/checkins",
    id: "Checkins"
  }
];

export default routes;
