"use client";
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import ReportCard from "./ReportCard";

const Reports = () => {
    const cardData = Array.from({ length: 20 }, (_, index) => index);
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
                {
                    cardData.map((card, i) => (
                        <GridItem key={i}>
                            <ReportCard {...card}/>
                        </GridItem>
                    ))
                }
            </Grid>
        </Stack>
    )

}

export default Reports