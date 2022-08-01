import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
const { user } = useContext(Context);
  return (
    <Router> 
      <TopBar />
      <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/register" element={user ? <Home /> : <Register />}></Route>
                <Route path="/login" element={user ? <Home /> : <Login />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
    </Router>
  );
}

export default App;
