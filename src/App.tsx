import * as React from 'react';
import Grid from './components/Grid';
import './style.css';
import { data } from './data';

export default function App() {
  return (
    <div>
      <Grid data={data} itemsPerPage={16} />
    </div>
  );
}
