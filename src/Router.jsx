import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/";
import TvPage from "./pages/tv/";
import MovieDetail from "./pages/main/MovieDetail";
import TvDetail from "./pages/tv/TvDetail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/tv" element={<TvPage />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
      <Route path="/tv/:id" element={<TvDetail />}></Route>
    </Routes>
  );
}
