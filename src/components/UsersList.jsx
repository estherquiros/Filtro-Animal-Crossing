// Importamos el componente del usuario
import UsersItem from "./UsersItem";

function UsersList({ users, favorites, toggleFavorite }) {
  // Si no hay usuarios, mostramos mensaje
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__icon">🔍</div>
        <h2 className="empty-state__title">No encontrado</h2>
        <p className="empty-state__message">
          No hay usuarios que coincidan con tu búsqueda
        </p>
      </div>
    );
  }

  return (
    <ul className="gallery">
      {/* Recorremos los usuarios */}
      {users.map((eachUser) => (
        <UsersItem
          key={eachUser.id} // Clave única
          user={eachUser} // Datos del usuario
          isFavorite={favorites.includes(eachUser.id)} // ¿Es favorito?
          toggleFavorite={toggleFavorite} // Función de favoritos
        />
      ))}
    </ul>
  );
}

// Exportamos el componente
export default UsersList;
