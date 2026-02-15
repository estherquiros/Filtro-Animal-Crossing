// Importamos hooks de React para usar estado y efectos
import { useMemo, useState } from "react";

// Importamos los estilos
import "../styles/App.scss";

// Importamos componentes
import Header from "./Header";
import Footer from "./Footer";
import Form from "./form";
import UsersList from "./UsersList";

// Importamos imágenes
import irene from "../images/irene.png";
import juana from "../images/juana.png";
import isa from "../images/isa.png";
import patri from "../images/patri.png";
import marta from "../images/marta.png";
import esther from "../images/esther.png";

// Array con la información de los usuarios
const usersInfo = [
  {
    id: 1, // Identificador único
    url: irene, // Imagen del usuario
    title: "Irene García", // Nombre del usuario
  },
  {
    id: 2,
    url: juana,
    title: "Juana Martínez",
  },
  {
    id: 3,
    url: isa,
    title: "Isabel Sánchez",
  },
  {
    id: 4,
    url: patri,
    title: "Patricia López",
  },
  {
    id: 5,
    url: marta,
    title: "Marta Rodríguez",
  },
  {
    id: 6,
    url: esther,
    title: "Esther Gómez",
  },
];

function App() {
  // Guardamos la lista de usuarios en un estado
  const [users] = useState(usersInfo);

  // Estado para guardar el texto que escribe el usuario en el input
  const [filterText, setFilterText] = useState("");

  // Estado para guardar los usuarios filtrados (derivado de users y filterText)
  const filteredUsers = useMemo(() => {
    return users.filter((eachUser) =>
      eachUser.title.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, [users, filterText]);

  // Estado para guardar los ids de los usuarios favoritos
  const [favorites, setFavorites] = useState([]);

  // Función para añadir o quitar favoritos
  const toggleFavorite = (userId) => {
    // Si el usuario ya es favorito
    if (favorites.includes(userId)) {
      // Lo quitamos de favoritos
      setFavorites(favorites.filter((id) => id !== userId));
    } else {
      // Si no es favorito, lo añadimos
      setFavorites([...favorites, userId]);
    }
  };

  return (
    <div>
      <main className="main">
        {/* Cabecera */}
        <Header />

        {/* Formulario de búsqueda */}
        <Form setFilterText={setFilterText} />

        {/* Contador de favoritos */}
        <p className="favorites-counter">⭐️ {favorites.length}</p>

        {/* Lista de usuarios */}
        <UsersList
          users={filteredUsers}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

// Exportamos el componente
export default App;
