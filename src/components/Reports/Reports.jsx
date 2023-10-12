"use client";
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import ReportCard from "./ReportCard";
import ReportsPaginate from "./ReportsPaginate";
import { useState } from 'react';
import { useReportContext } from '../../context/ReportContext';

const Reports = ({ reportsData }) => {

  const { onOpen, setId } = useReportContext();
  const [ openModal, setOpenModal ] = useState("");

  const handleOpenModal = (value) => {
    const isOpen = value !== openModal || openModal === "";
    setOpenModal(isOpen ? value : "");
    setId(value);

    if (isOpen) {
      onOpen();
    }
  };

   //Pagination

  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 12; 
  const totalItems = reportsData?.length; 

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = reportsData?.slice(itemOffset, endOffset);
 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
    
    return (
        <Stack spacing={6} sx={{
            padding: {
              base: "2rem 1.4rem !important",
              md: "4rem 3rem !important"
            },
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
                            <ReportCard id={card._id} {...card} handleOpen={() => handleOpenModal(card._id)}/>
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