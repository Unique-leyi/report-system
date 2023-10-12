"use client";
import ReactPaginate from "react-paginate";
import { Stack, VStack, Button } from "@chakra-ui/react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import classes from "../styles/reportpaginate.module.css";


export const PreviousBtn = () => {
    return (
        <Stack spacing={4}>
            <Button leftIcon={<RiArrowLeftLine sx={{ marginInline: "1rem !important" }}/>} sx={{
                backgroundColor: "transparent !important",
                color: "white !important",
            }}>
                Previous
            </Button>
        </Stack>
    )
}

export const NextBtn = () => {
    return (
        <Stack spacing={4}>
            <Button rightIcon={<RiArrowRightLine />} sx={{
                backgroundColor: "transparent !important",
                color: "white !important",
            }}>
                Next
            </Button>
        </Stack>
    )
}

const ReportsPagination = ({ pageCount, onPageChange, initialPage = 0 }) => {
  return (
    <VStack sx={{
        marginTop: {
            base: "0.4rem !important",
            md: "4rem !important"
        }
    }}>
        <ReactPaginate
          previousLabel={<PreviousBtn/>}
          previousClassName="w-full flex justify-start items-start bg-[transparent]"
          nextLabel={<NextBtn/>}
          nextClassName="w-full flex justify-end items-end bg-[transparent]"
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={6}
          onPageChange={onPageChange}
          forcePage={initialPage}
          containerClassName={"lg:!pt-4 flex justify-center items-center gap-4 lg:!my-4 !w-full lg:!max-w-[60%] !mx-auto !w-full border-t-[1px] border-t-solid border-[var(--white-50, rgba(255, 255, 255, 0.50))]"}
          pageClassName={"block"}
          pageLinkClassName={"!text-[var(--darkmode-text-grey, #A5B3B3)] !mx-3 hover:!bg-[var(--darkmode-bg-02, #141F1F)] hover:!text-white"}
          activeClassName={`${classes.active_bg} text-white`}
        />
    </VStack>
  );
}

export default ReportsPagination
