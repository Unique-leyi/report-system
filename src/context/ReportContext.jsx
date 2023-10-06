"use client";

import { createContext, useContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import ReportDetails from "../components/Reports/ReportDetails";

const ReportContext = createContext({});

export const ReportContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ReportContext.Provider value={{isOpen, onOpen, onClose}}>
      {children}
      <ReportDetails handleIsOpen={isOpen} handleOnClose={onClose}/>
    </ReportContext.Provider>
  );
}


export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReportContext must be used within a ReportContextProvider');
  }
  return context;
}

