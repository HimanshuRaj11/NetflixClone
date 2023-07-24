import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import Signin from "./Pages/Signin";
import Netflix from "./Pages/netflix";
import Movies from "./Pages/Movies";
import TVShows from "./Pages/TVShows";
import Player from "./Pages/Player";
import UserListedMovies from "./Pages/UserListedMovies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route excat path="/login" element={<Login />} />
          <Route excat path="/signin" element={<Signin />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/tv" element={<TVShows />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/new" element={<Player />} />
          <Route exact path="/mylist" element={<UserListedMovies />} />
          <Route exact path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
