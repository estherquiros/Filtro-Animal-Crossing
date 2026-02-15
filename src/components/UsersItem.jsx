function UsersItem({ user, isFavorite, toggleFavorite }) {
  return (
    // Clase extra si es favorito
    <li className={`flower ${isFavorite ? "flower--favorite" : ""}`}>
      {/* Contenedor de la imagen */}
      <div className="flower__image-container">
        <img
          className="flower__image"
          src={user.url} // Imagen del usuario
          alt={`Foto de ${user.title}`} // Texto alternativo
        />
      </div>

      {/* Contenido */}
      <div className="flower__content">
        {/* Nombre del usuario */}
        <h2 className="flower__title">{user.title}</h2>

        {/* Botón de favorito */}
        <button
          className="flower__favorite-btn"
          onClick={() => toggleFavorite(user.id)} // Añade o quita favorito
        >
          {/* Estrella llena o vacía */}
          {isFavorite ? "⭐" : "☆"}
        </button>
      </div>
    </li>
  );
}

// Exportamos el componente
export default UsersItem;
