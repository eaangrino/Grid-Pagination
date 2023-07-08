import * as React from 'react';
import GridPagination from './components/GridPagination';
import './style.css';
import { data } from './data';

export default function App() {
  return (
    <div>
      <GridPagination data={data} />
    </div>
  );
}
