import React, { useState } from 'react';

const data = [
  { name: 'John', age: 25, genre: 'male' },
  { name: 'Emma', age: 30, genre: 'female' },
  { name: 'Michael', age: 42, genre: 'male' },
  { name: 'Sophia', age: 19, genre: 'female' },
  { name: 'William', age: 36, genre: 'male' },
  { name: 'Olivia', age: 28, genre: 'female' },
  { name: 'James', age: 39, genre: 'male' },
  { name: 'Ava', age: 22, genre: 'female' },
  { name: 'Benjamin', age: 33, genre: 'male' },
  { name: 'Mia', age: 31, genre: 'female' },
  { name: 'Jacob', age: 27, genre: 'male' },
  { name: 'Lily', age: 24, genre: 'female' },
  { name: 'Ethan', age: 38, genre: 'male' },
  { name: 'Emily', age: 29, genre: 'female' },
  { name: 'Alexander', age: 35, genre: 'male' },
  { name: 'Sofia', age: 26, genre: 'female' },
  { name: 'Daniel', age: 41, genre: 'male' },
  { name: 'Charlotte', age: 23, genre: 'female' },
  { name: 'Matthew', age: 37, genre: 'male' },
  { name: 'Harper', age: 32, genre: 'female' },
  { name: 'Henry', age: 34, genre: 'male' },
  { name: 'Grace', age: 21, genre: 'female' },
  { name: 'Jackson', age: 40, genre: 'male' },
  { name: 'Chloe', age: 20, genre: 'female' },
  { name: 'Sebastian', age: 43, genre: 'male' },
  { name: 'Abigail', age: 18, genre: 'female' },
  { name: 'David', age: 45, genre: 'male' },
  { name: 'Elizabeth', age: 17, genre: 'female' },
  { name: 'Joseph', age: 44, genre: 'male' },
  { name: 'Ella', age: 16, genre: 'female' },
  { name: 'Daniel', age: 47, genre: 'male' },
  { name: 'Avery', age: 15, genre: 'female' },
  { name: 'Christopher', age: 48, genre: 'male' },
  { name: 'Scarlett', age: 14, genre: 'female' },
];
const GridPagination = () => {
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
