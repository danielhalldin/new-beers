import React, { Suspense, lazy } from "react";
const Beers = lazy(() => import("../components/Beers"));
const Checkins = lazy(() => import("../components/Checkins"));
const suspenseFallback = <div>Loading...</div>;

const routes = [
  {
    component: (
      <Suspense fallback={suspenseFallback}>
        <Beers stockType="Små partier" />
      </Suspense>
    ),
    path: "/sma-partier",
    id: "Små partier"
  },
  {
    component: (
      <Suspense fallback={suspenseFallback}>
        <Beers stockType="Lokalt och småskaligt" />
      </Suspense>
    ),
    path: "/lokalt-och-smaskaligt",
    id: "Lokalt och småskaligt"
  },
  {
    component: (
      <Suspense fallback={suspenseFallback}>
        <Beers stockType="Övrigt sortiment" />
      </Suspense>
    ),
    path: "/ovrigt-sortiment",
    id: "Övrigt sortiment"
  },
  {
    component: (
      <Suspense fallback={suspenseFallback}>
        <Beers stockType="Ordinarie sortiment" />
      </Suspense>
    ),
    path: "/ordinarie-sortiment",
    id: "Ordinarie sortiment"
  },
  {
    component: (
      <Suspense fallback={suspenseFallback}>
        <Checkins stockType="Checkins" />
      </Suspense>
    ),
    path: "/checkins",
    id: "Checkins"
  }
];

export default routes;
