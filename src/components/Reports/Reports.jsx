"use client";
import { Stack, VStack, Grid, GridItem } from '@chakra-ui/react';
import ReportCard from "./ReportCard";
import ReportsPaginate from "./ReportsPaginate";
import { useState } from 'react';
import { useReportContext } from '../../context/ReportContext';
import { data } from "../../api/data";

const Reports = () => {

  const { onOpen } = useReportContext();
  const [ openModal, setOpenModal ] = useState(0);

  const handleOpenModal = (value) => {
    const isOpen = value !== openModal || openModal === 0;
    setOpenModal(isOpen ? value : 0);
    if (isOpen) {
      onOpen();
    }
  };

   //Pagination

  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 12; 
  const totalItems = data.length; 

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
    
    return (
        <Stack spacing={6} sx={{
            padding: "4rem 3rem !important",
        }}>
            <Grid templateColumns={{
                base: "repeat(1, 1fr) !important",
                sm: "repeat(2, 1fr) !important",
                md: "repeat(3, 1fr) !important",
                lg: "repeat(4, 1fr) !important",
            }} 
            gap={6}>
                { currentItems &&
                    currentItems.map((card, i) => (
                        <GridItem key={i}>
                            <ReportCard {...card} handleOpen={() => handleOpenModal(i)}/>
                        </GridItem>
                    ))
                }
            </Grid>
            
            <ReportsPaginate
              pageCount={pageCount} 
              onPageChange={handlePageClick} 
              initialPage={currentPage}
            />
            
        </Stack>
    )

}

export default Reports