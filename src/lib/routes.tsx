import React from "react";
import Page from "components/Page";
import Categories from "components/Navigation/Categories";
import Search from "components/Navigation/Search";
import { ReactComponent as Rekommended } from "images/star-fill.svg";
import { ReactComponent as SearchIcon } from "images/search.svg";
import { ReactComponent as Stock } from "images/grid-fill.svg";

const routes = [
  {
    path: "/checkins",
    id: "Checkins",
    component: <Page name="Checkins" />,
  },
  {
    path: "/rekommenderade",
    id: "Rekommenderade",
    menuIndex: 1,
    icon: <Rekommended />,
    component: <Page name="Rekommenderade" />,
  },
  {
    path: "/katagorier/tillfalligt-sortiment",
    id: "Tillfälligt sortiment",
    component: <Page name="Tillfälligt sortiment" />,
  },
  {
    path: "/katagorier/lokalt-och-smaskaligt",
    id: "Lokalt & småskaligt",
    component: <Page name="Lokalt & småskaligt" />,
  },
  {
    path: "/katagorier/ordervaror",
    id: "Ordervaror",
    component: <Page name="Ordervaror" />,
  },
  {
    path: "/katagorier/fast-sortiment",
    id: "Fast sortiment",
    component: <Page name="Fast sortiment" />,
  },
  {
    path: "/katagorier/sasong",
    id: "Säsong",
    component: <Page name="Säsong" />,
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
    path: "/sok-resultat",
    id: "Sökresultat",
    component: <Page name="Sök" />,
  },
  {
    path: "/sok",
    id: "Sök",
    menuIndex: 3,
    component: <Search />,
    icon: <SearchIcon />,
    submenu: true,
  },
];

export default routes;
