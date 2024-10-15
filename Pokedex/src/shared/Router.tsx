import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { lazy } from "react";
import { authLoader } from "./authLoader";

const Home = lazy(() => import("../pages/HomePage"));
const Pokemon = lazy(() => import('../pages/PokemonPage/PokemonPage'));
const PokeDB = lazy(() => import('../pages/PokeDB/PokeDBPage'))
const Login = lazy(() => import('../pages/Login/LoginPage'));
const SignUp = lazy(() => import('../pages/SignUp/SignUpPage'))
const News = lazy(() => import('../pages/News/NewsPage'))

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      //errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/pokemondb",
          element: <PokeDB />,
          loader: authLoader
        },
        {
          path: "/pokemondb/:pokemon",
          element: <Pokemon />,
          loader: authLoader
        },
        {
          path: "/news",
          element: <News />,
          loader: authLoader
        },
       
      ]
    },
  ]);