import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ContactsPage from "./components/pages/ContactsPage";
import AboutPage from "./components/pages/AboutPage";
import MoviesPage from "./components/pages/MoviesPage";
import OneMoviePage from "./components/pages/OneMoviePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ForbiddenPage from "./components/pages/ForbiddenPage";
import "./css/style.css";
import "./App.css";

function App() {
  return (
        <Routes basename="/movie-app">
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<OneMoviePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/access denied" element={<ForbiddenPage />} />
          </Route>
        </Routes>
  )
};

export default App;
