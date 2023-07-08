import { useEffect, useState } from 'react';
import { IData } from '../../interfaces/interfaces';

const calculateRange = (data: IData[], itemsPerPage: number) => {
  const totalPages: number = Math.ceil(data.length / itemsPerPage);
  return totalPages;
};

const sliceData = (data: IData[], startIndex: number, endIndex: number) => {
  const items = data.slice(startIndex, endIndex);
  return items;
};

const useGrid = (data: IData[], currentPage: number, itemsPerPage: number) => {
  const [gridRange, setGridRange] = useState<number>();
  const [slice, setSlice] = useState<IData[]>([]);

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  useEffect(() => {
    const range: number = calculateRange(data, itemsPerPage);
    setGridRange(range);

    const slice: IData[] = sliceData(data, startIndex, endIndex);
    setSlice(slice);
  }, [
    data,
    setGridRange,
    setSlice,
    calculateRange,
    sliceData,
    startIndex,
    endIndex,
  ]);

  return { slice, range: gridRange };
};

export default useGrid;
