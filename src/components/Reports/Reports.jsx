"use client";
import { Stack, VStack, Grid, GridItem } from '@chakra-ui/react';
import ReportCard from "./ReportCard";
import ReportsPaginate from "./ReportsPaginate";
import { useState } from 'react';
import { useReportContext } from '../../context/ReportContext';

const Reports = () => {

  const { onOpen } = useReportContext();

  const cardData = Array.from({ length: 100 }, (_, index) => index);

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
  const itemsPerPage = 20; 
  const totalItems = 100; 

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cardData.slice(itemOffset, endOffset);
 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
    
    return (
        <Stack spacing={6} sx={{
            padding: "4rem 3rem !important",
        }}>
            <Grid templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
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