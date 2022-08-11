import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./pages/HomePage";
import PlayerPage from "./pages/PlayerPage";



const Routte = () => {

    return(
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<HomePage />} />
        <Route path="/player" caseSensitive={false} element={<PlayerPage/>}/>
      </Routes>
    </Router>
    );

};

export default Routte;