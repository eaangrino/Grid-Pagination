import { useEffect, useState } from 'react';

const calculateRange = (data: any[], itemsPerPage: number) => {
  const totalPages: number = Math.ceil(data.length / itemsPerPage);
  return totalPages;
};

const sliceData = (data: any[], startIndex: number, endIndex: number) => {
  const items = data.slice(startIndex, endIndex);
  return items;
};

const useGrid = (data: any[], currentPage: number, itemsPerPage: number) => {
  const [gridRange, setGridRange] = useState<number>();
  const [slice, setSlice] = useState<any>([]);

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  useEffect(() => {
    const range: number = calculateRange(data, itemsPerPage);
    setGridRange(range);

    const slice: any[] = sliceData(data, startIndex, endIndex);
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
