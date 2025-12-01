import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/accueil">Accueil</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/match">Match</Link>
      </nav>

      <h1>Bienvenue dans l'application</h1>
    </div>
  );
}

export default App;
