"use client";

import { Stack, Container, VStack, HStack, SimpleGrid, Box, Heading } from '@chakra-ui/react';
import classes from "../styles/welcome.module.css";
import Image from "next/image";
import { calendar } from "../../../public/assets/";

const Welcome = () => {
    return (
        <Stack w="100%">
             <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10} sx={{ padding: {
                base: "2rem !important",
                sm: "1rem 4rem !important"
            } }}>
                <VStack w={"100%"} sx={{ padding: "2rem !important" }}> 
                    <Box w="100%" className="!flex !justify-start !items-start !flex-col !gap-3">
                        <Heading as="h5" 
                            color={"var(--white-50, rgba(255, 255, 255, 0.50))"}
                            className={classes.welcome_text}>
                            Welcome back Admin
                        </Heading>

                        <Heading as="h5" className="!text-white !text-4xl !font-bold">
                            Welcome to our report dashboard
                        </Heading>

                        <Heading as="h6" className="!text-sm !font-normal" color={"var(--white-70, rgba(255, 255, 255, 0.70));"}>
                             Record, Update and track team’s progress.
                        </Heading>
                    </Box>
                    <HStack>
                        <Box w="100%" className="!flex !justify-around !items-center gap-4">

                        </Box>
                    </HStack>
                </VStack>

                <VStack>
                   <Box w="100%" sx={{
                        display: "flex !important",
                        justifyContent: {
                            base: "center !important",
                            sm: "flex-end !important",
                        },
                        alignItems: {
                            base: "center !important",
                            sm: "flex-end !important"
                        },
                        flexDirection: "column !important"
                   }}>
                     <Image src={calendar} alt="calendar" priority={true}/>
                   </Box> 
                </VStack>
            </SimpleGrid>       
        </Stack>
    )
}

export default Welcome