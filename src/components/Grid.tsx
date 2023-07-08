import React, { useState } from 'react';
import GridFooter from './GridFooter';
import useGrid from './hook/useGrid';

const Grid = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { slice, range } = useGrid(data, currentPage, itemsPerPage);

  return (
    <div>
      <GridFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={range}
      />
      <div className="grid-container">
        {slice.map((item, index) => (
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

export default Grid;
