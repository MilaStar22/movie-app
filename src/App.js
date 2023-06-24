import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ContactsPage from "./components/pages/ContactsPage";
import AboutPage from "./components/pages/AboutPage";
import MoviesPage from "./components/pages/MoviesPage";
import OneMoviePage from "./components/pages/OneMoviePage";
// import WishListPage from "./components/pages/WishListPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ForbiddenPage from "./components/pages/ForbiddenPage";
import "./css/style.css";
import "./App.css";

function App() {
  return (
      <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<OneMoviePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* <Route path="/list/:id" element={<WishListPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/access denied" element={<ForbiddenPage />} />
      </Route>
      </Routes>
  )
};

export default App;
