import React from "react";
import Page from "components/Page";
import Categories from "components/Navigation/Categories";
import { ReactComponent as Rekommended } from "images/star-fill.svg";
import { ReactComponent as SearchIcon } from "images/search.svg";
import { ReactComponent as Stock } from "images/grid-fill.svg";

const routes = [
  {
    path: "/checkins",
    id: "Checkins",
    component: <Page id="Checkins" />,
  },
  {
    path: "/rekommenderade",
    id: "Rekommenderade",
    menuIndex: 1,
    icon: <Rekommended />,
    component: <Page id="Rekommenderade" />,
  },
  {
    path: "/katagorier/tillfalligt-sortiment",
    id: "Tillfälligt sortiment",
    component: <Page id="Tillfälligt sortiment" />,
  },
  {
    path: "/katagorier/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    component: <Page id="Lokalt & småskaligt" />,
  },
  {
    path: "/katagorier/ordervaror",
    id: "Ordervaror",
    component: <Page id="Ordervaror" />,
  },
  {
    path: "/katagorier/fast-sortiment",
    id: "Fast sortiment",
    component: <Page id="Fast sortiment" />,
  },
  {
    path: "/katagorier/sasong",
    id: "Säsong",
    component: <Page id="Säsong" />,
  },
  {
    path: "/katagorier",
    id: "Kategorier",
    menuIndex: 2,
    icon: <Stock />,
    component: <Categories />,
    submenu: true,
  },
  {
    path: "/sok",
    id: "Sök",
    menuIndex: 3,
    component: <Page id="Sök" />,
    icon: <SearchIcon />,
  },
];

export default routes;
