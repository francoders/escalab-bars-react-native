import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const titleData = {
  title: 'Promocion',
  description: 'Descripcion: ',
  title3: 'Promocion 3',
};

export const DataProvider = ({children}) => {
  return (
    <DataContext.Provider
      value={{
        titleData,
      }}>
      {children}
    </DataContext.Provider>
  );
};
