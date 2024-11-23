import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MovieDetailsPage from "../pages/MovieDetails";
import WatchlistPage from "../pages/Watchlist";

import { ProtectedRoute } from "./ProtectedRoute.tsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      
        <Login />
      
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/movies/:id", 
    element: (
      <ProtectedRoute>
        <MovieDetailsPage />
      </ProtectedRoute>
    ), 
  },
  {
    path: "/watchlist",
    element: (
      <ProtectedRoute>
        <WatchlistPage />
      </ProtectedRoute>
    ), 
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
]);
