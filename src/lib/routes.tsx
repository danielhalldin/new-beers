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
    menuIndex: -1,
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
    menuIndex: -1,
    component: <Page id="Tillfälligt sortiment" />,
  },
  {
    path: "/katagorier/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    menuIndex: -1,
    component: <Page id="Lokalt & småskaligt" />,
  },
  {
    path: "/katagorier/ordervaror",
    id: "Ordervaror",
    menuIndex: -1,
    component: <Page id="Ordervaror" />,
  },
  {
    path: "/katagorier/fast-sortiment",
    id: "Fast sortiment",
    menuIndex: -1,
    component: <Page id="Fast sortiment" />,
  },
  {
    path: "/katagorier/sasong",
    id: "Säsong",
    menuIndex: -1,
    component: <Page id="Säsong" />,
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
    component: <Page id="Sök" />,
    icon: <SearchIcon />,
  },
];

export default routes;
