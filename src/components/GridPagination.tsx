import React, { useState } from 'react';

const GridPagination = ({ data }) => {
  //Numero de los elementos por pagina de grilla
  const itemsPerPage = 16;
  //Calcular las paginas para la grilla
  const totalPages = Math.ceil(data.length / itemsPerPage);
  //Alamacenar la pagina actual para no perdernos
  const [currentPage, setCurrentPage] = useState(1);

  // Debemos calcular los índices de inicio y fin para la página actual
  //si esta en la pagina 2
  //startIndex = (2-1)*16
  //startIndex = 1*16
  //startIndex = 16
  //Da 16 porque en la pocicion del arreglo es el segundo si fuera el primero seria 15
  const startIndex = (currentPage - 1) * itemsPerPage;

  //endIndex 16 + 16
  //endIndex 32
  // nos indicaria el indice donde termina
  const endIndex = startIndex + itemsPerPage;

  // Obtener los datos para la página actual seleccionada
  const items = data.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <div>Name: {item.name}</div>
            <div>Age: {item.age}</div>
            <div>Genre: {item.genre}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPagination;
