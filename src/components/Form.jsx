function Form({ setFilterText }) {
  // Función que evita que el formulario recargue la página
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  // Función que se ejecuta cuando escribimos en el input
  const handleInputFilter = (ev) => {
    // Guardamos el texto escrito en el estado del App
    setFilterText(ev.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text" // Tipo texto
        name="filter"
        id="filter"
        className="form__input"
        placeholder="Busca tu usuario"
        onInput={handleInputFilter} // Detecta lo que escribimos
      />
    </form>
  );
}

// Exportamos el componente
export default Form;
