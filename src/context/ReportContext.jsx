"use client";

import { createContext, useContext, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import ReportDetails from "../components/Reports/ReportDetails";

const ReportContext = createContext({});

export const ReportContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState("");

  return (
    <ReportContext.Provider value={{isOpen, onOpen, onClose, setId}}>
      {children}
      <ReportDetails reportId={id} handleIsOpen={isOpen} handleOnClose={onClose}/>
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

